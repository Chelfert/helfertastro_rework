from flask import Flask, request, redirect, jsonify
from flask_cors import CORS
import spotipy
from spotipy.oauth2 import SpotifyOAuth
import os
import json
from datetime import datetime, timedelta
import threading
import time

app = Flask(__name__)
CORS(app)

# Configuration
CLIENT_ID = os.environ.get('3d1da1b5cb8f44c283ef5986caa20464')
CLIENT_SECRET = os.environ.get('19b792cbe09b466eae4f9384d46c60ff')
REDIRECT_URI = os.environ.get('https://helfertastro.com/hibernationstation.html')
CACHE_FILE = 'track_cache.json'

# Initialize Spotify OAuth
sp_oauth = SpotifyOAuth(
    client_id=CLIENT_ID,
    client_secret=CLIENT_SECRET,
    redirect_uri=REDIRECT_URI,
    scope='user-read-playback-state user-modify-playback-state playlist-read-private playlist-modify-private'
)

# Track cache structure
class TrackCache:
    def __init__(self):
        self.tracks = {}  # {track_id: {'added_date': ISO_DATE}}
        self.load_cache()
    
    def load_cache(self):
        if os.path.exists(CACHE_FILE):
            with open(CACHE_FILE, 'r') as f:
                self.tracks = json.load(f)
    
    def save_cache(self):
        with open(CACHE_FILE, 'w') as f:
            json.dump(self.tracks, f)
    
    def add_track(self, track_id):
        if track_id not in self.tracks:
            self.tracks[track_id] = {
                'added_date': datetime.now().isoformat()
            }
            self.save_cache()
    
    def remove_old_tracks(self, spotify):
        now = datetime.now()
        hibernate_playlist_id = None
        
        # Find Hibernate playlist
        playlists = spotify.current_user_playlists()
        for playlist in playlists['items']:
            if playlist['name'].lower() == 'hibernate':
                hibernate_playlist_id = playlist['id']
                break
        
        if not hibernate_playlist_id:
            return
        
        tracks_to_remove = []
        for track_id, data in self.tracks.items():
            added_date = datetime.fromisoformat(data['added_date'])
            if now - added_date > timedelta(days=180):  # 6 months
                tracks_to_remove.append(track_id)
        
        if tracks_to_remove:
            # Remove tracks from playlist in batches of 100
            for i in range(0, len(tracks_to_remove), 100):
                batch = tracks_to_remove[i:i+100]
                spotify.playlist_remove_all_occurrences_of_items(
                    hibernate_playlist_id, 
                    batch
                )
                
                # Remove from cache
                for track_id in batch:
                    del self.tracks[track_id]
            
            self.save_cache()

track_cache = TrackCache()

@app.route('/login')
def login():
    auth_url = sp_oauth.get_authorize_url()
    return jsonify({'auth_url': auth_url})

@app.route('/callback')
def callback():
    code = request.args.get('code')
    token_info = sp_oauth.get_access_token(code)
    return jsonify(token_info)

@app.route('/refresh_token')
def refresh_token():
    token_info = sp_oauth.refresh_access_token(request.args.get('refresh_token'))
    return jsonify(token_info)

@app.route('/tracks')
def get_tracks():
    return jsonify(track_cache.tracks)

@app.route('/update_playlist')
def update_playlist():
    token_info = sp_oauth.get_access_token(request.args.get('refresh_token'))
    if not token_info:
        return jsonify({'error': 'Invalid token'}), 401
    
    spotify = spotipy.Spotify(auth=token_info['access_token'])
    
    # Find Hibernate playlist
    playlists = spotify.current_user_playlists()
    hibernate_playlist_id = None
    for playlist in playlists['items']:
        if playlist['name'].lower() == 'hibernate':
            hibernate_playlist_id = playlist['id']
            break
    
    if not hibernate_playlist_id:
        return jsonify({'error': 'Hibernate playlist not found'}), 404
    
    # Get all tracks
    tracks = []
    offset = 0
    while True:
        results = spotify.playlist_tracks(
            hibernate_playlist_id,
            offset=offset,
            fields='items(track(id))'
        )
        if not results['items']:
            break
        
        for item in results['items']:
            if item['track'] and item['track']['id']:
                track_cache.add_track(item['track']['id'])
        
        offset += len(results['items'])
    
    # Remove old tracks
    track_cache.remove_old_tracks(spotify)
    
    return jsonify(track_cache.tracks)

