import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const GalleryPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const galleryItems = [
    {
      image: "/jpgPictures/IC63.jpg",
      title: "The Ghost of Cassiopeia",
      link: "/TargetPages/IC63.html"
    },
    {
      image: "/jpgPictures/NorthAmericanNebula.jpg",
      title: "The North America Nebula",
      link: "/TargetPages/NorthAmericanAndPelican.html"
    },
    {
      image: "/jpgPictures/EastVeil.jpg",
      title: "The Eastern Veil",
      link: "/TargetPages/VeilNebula.html"
    },
    {
      image: "/jpgPictures/DumbbellNebula.jpg",
      title: "The Dumbbell Nebula",
      link: "/TargetPages/DumbbellNebula.html"
    },
    {
      image: "/jpgPictures/LagoonNebula.jpg",
      title: "The Lagoon Nebula",
      link: "/TargetPages/Lagoontrifid.html"
    },
    {
      image: "/jpgPictures/Bodesandcigar.jpg",
      title: "Bodes and the Cigar Galaxy",
      link: "/TargetPages/Bodes.html"
    },
    {
      image: "/jpgPictures/jellyfishNebula.jpg",
      title: "The Jellyfish Nebula",
      link: "/TargetPages/JellyfishNebula.html"
    },
    {
      image: "/jpgPictures/RosetteNebula_comp.jpg",
      title: "The Rosette Nebula",
      link: "/TargetPages/RosetteNebula.html"
    },
    {
      image: "/jpgPictures/IC342_LRGBHA.jpg",
      title: "IC 342",
      link: "/TargetPages/IC342.html"
    },
    {
      image: "/pictures/Waxing_Gibbous_12_2023.jpg",
      title: "Lunar",
      link: "/TargetPages/Lunar.html"
    },
    {
      image: "/jpgPictures/FlamingStar.jpg",
      title: "The Flaming Star Nebula",
      link: "/TargetPages/FlamingStar.html"
    },
    {
      image: "/jpgPictures/sho_soulnebula.jpg",
      title: "Soul Nebula",
      link: "/TargetPages/SoulNebula.html"
    },
    {
      image: "/jpgPictures/M45.jpg",
      title: "The Pleiades",
      link: "/TargetPages/Pleiades.html"
    },
    {
      image: "/jpgPictures/PerseusCluster.jpg",
      title: "Double Cluster in Perseus",
      link: "/TargetPages/PerseusCluster.html"
    },
    {
      image: "/jpgPictures/PickeringsTriangle.jpg",
      title: "Pickering's Triangle",
      link: "/TargetPages/VeilNebula.html"
    },
    {
      image: "/jpgPictures/Leo_triplet.jpg",
      title: "Leo Triplet",
      link: "/TargetPages/LeoTriplet.html"
    },
    {
      image: "/jpgPictures/PacmanNebula.jpg",
      title: "The Pacman Nebula",
      link: "/TargetPages/PacmanNebula.html"
    },
    {
      image: "/jpgPictures/Whirlpool_Galaxy.jpg",
      title: "The Whirlpool Galaxy",
      link: "/TargetPages/WhirlpoolGalaxy.html"
    },
    {
      image: "/jpgPictures/HorseheadNebula.jpg",
      title: "The Horsehead Nebula",
      link: "/TargetPages/HorseheadNebula.html"
    },
    {
      image: "/jpgPictures/OrionNebula.jpg",
      title: "The Orion Nebula",
      link: "/TargetPages/OrionNebula.html"
    },
    {
      image: "/jpgPictures/NGC7822.jpg",
      title: "NGC 7822",
      link: "/TargetPages/NGC7822.html"
    },
    {
      image: "/jpgPictures/LobsterClawBubbleHB-clear.jpg",
      title: "The Lobster Claw and Bubble Nebula",
      link: "/TargetPages/LobsterClawbubble.html"
    },
    {
      image: "/jpgPictures/CaliforniaNebula.jpg",
      title: "The California Nebula",
      link: "/TargetPages/CaliforniaNebula.html"
    },
    {
      image: "/jpgPictures/CygnusWallHubble-topaz.jpg",
      title: "The Cygnus Wall",
      link: "/TargetPages/CygnusWall.html"
    },
    {
      image: "/jpgPictures/PelicanNebula.jpg",
      title: "The Pelican Nebula",
      link: "/TargetPages/PelicanNebula.html"
    },
    {
      image: "/jpgPictures/Heart%20Nebula.jpg",
      title: "The Heart Nebula",
      link: "/TargetPages/HeartNebula.html"
    },
    {
      image: "/jpgPictures/crescentNebula.jpg",
      title: "Crescent Nebula",
      link: "/TargetPages/CrescentNebula.html"
    },
    {
      image: "/jpgPictures/Pillars_core.jpg",
      title: "Eagle Nebula",
      link: "/TargetPages/EagleNebula.html"
    },
    {
      image: "/jpgPictures/Veil%20Nebula.jpg",
      title: "The Veil Nebula",
      link: "/TargetPages/VeilNebula.html"
    },
    {
      image: "/jpgPictures/M13_wtrmrk.jpg",
      title: "M13, Hercules Cluster",
      link: "/TargetPages/M13.html"
    },
    {
      image: "/jpgPictures/M31-130pds.jpg",
      title: "Andromeda",
      link: "/TargetPages/M31.html"
    },
    {
      image: "/jpgPictures/M33.jpg",
      title: "M33, The Triangulum Galaxy",
      link: "/TargetPages/M33.html"
    },
    {
      image: "/jpgPictures/IrisNebula.jpg",
      title: "The Iris Nebula",
      link: "/TargetPages/IrisNebula.html"
    },
    {
      image: "/jpgPictures/elephants_trunk.jpg",
      title: "The Elephant's Trunk",
      link: "/TargetPages/ElephantsTrunk.html"
    }
  ];

  return (
    <div style={{ backgroundColor: '#111827', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: 'white', textAlign: 'center', fontSize: '2rem', marginBottom: '20px' }}>
        Gallery
      </h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {galleryItems.map((item, index) => (
          <div key={index} style={{ 
            position: 'relative',
            aspectRatio: '1',
            overflow: 'hidden',
            borderRadius: '8px',
            backgroundColor: 'rgba(0,0,0,0.2)'
          }}>
            <a href={item.link}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '20px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                color: 'white',
                textAlign: 'center'
              }}>
                <h3 style={{ margin: 0 }}>{item.title}</h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;