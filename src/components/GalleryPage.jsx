import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <img 
                  src="/Clayton_AstroPhotoLogo/Helfert_AstroLogoWhite.png" 
                  alt="Helfert Astrophotography"
                  className="h-8"
                />
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:text-blue-400 transition-colors">Home</Link>
              <Link to="/gallery" className="text-white hover:text-blue-400 transition-colors">Gallery</Link>
              <Link to="/local-conditions" className="text-white hover:text-blue-400 transition-colors">Local Conditions</Link>
              <Link to="/equipment" className="text-white hover:text-blue-400 transition-colors">Equipment</Link>
            </div>
          </div>

          {/* Mobile menu panel */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90">
                <Link to="/" className="block text-white px-3 py-2 hover:bg-gray-800 rounded-md">Home</Link>
                <Link to="/gallery" className="block text-white px-3 py-2 hover:bg-gray-800 rounded-md">Gallery</Link>
                <Link to="/local-conditions" className="block text-white px-3 py-2 hover:bg-gray-800 rounded-md">Local Conditions</Link>
                <Link to="/equipment" className="block text-white px-3 py-2 hover:bg-gray-800 rounded-md">Equipment</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Gallery Header */}
      <div className="pt-24 pb-12">
        <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
          Astrophotography Gallery
        </h1>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative aspect-square overflow-hidden rounded-lg bg-black/20"
            >
              <a href={item.link} className="block w-full h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-xl font-semibold text-center">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;