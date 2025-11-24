import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const GalleryPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const galleryItems = [
    {
      image: "/jpgPictures/NGC457.jpg",
      title: "The Owl Cluster",
      link: "/NGC457"
    },
    {
      image: "/jpgPictures/IC63.jpg",
      title: "The Ghost of Cassiopeia",
      link: "/ic63"
    },
    {
      image: "/jpgPictures/NorthAmericanNebula.jpg",
      title: "The North America Nebula",
      link: "/northamericanandpelican"
    },
    {
      image: "/jpgPictures/EastVeil.jpg",
      title: "The Eastern Veil",
      link: "/veilnebula"
    },
    {
      image: "/jpgPictures/DumbbellNebula.jpg",
      title: "The Dumbbell Nebula",
      link: "/dumbbell-nebula"
    },
    {
      image: "/jpgPictures/LagoonNebula.jpg",
      title: "The Lagoon Nebula",
      link: "/lagoontrifid"
    },
    {
      image: "/jpgPictures/Bodesandcigar.jpg",
      title: "Bodes and the Cigar Galaxy",
      link: "/bodes"
    },
    {
      image: "/jpgPictures/jellyfishNebula.jpg",
      title: "The Jellyfish Nebula",
      link: "/jellyfishnebula"
    },
    {
      image: "/jpgPictures/RosetteNebula_comp.jpg",
      title: "The Rosette Nebula",
      link: "/rosettenebula"
    },
    {
      image: "/jpgPictures/IC342_LRGBHA.jpg",
      title: "IC 342",
      link: "/ic342"
    },
    {
      image: "/pictures/Waxing_Gibbous_12_2023.jpg",
      title: "Lunar",
      link: "/lunar"
    },
    {
      image: "/jpgPictures/FlamingStar.jpg",
      title: "The Flaming Star Nebula",
      link: "/flamingstar"
    },
    {
      image: "/jpgPictures/sho_soulnebula.jpg",
      title: "Soul Nebula",
      link: "/soulnebula"
    },
    {
      image: "/jpgPictures/M45.jpg",
      title: "The Pleiades",
      link: "/pleiades"
    },
    {
      image: "/jpgPictures/PerseusCluster.jpg",
      title: "Double Cluster in Perseus",
      link: "/perseuscluster"
    },
    {
      image: "/jpgPictures/PickeringsTriangle.jpg",
      title: "Pickering's Triangle",
      link: "/veilnebula"
    },
    {
      image: "/jpgPictures/Leo_triplet.jpg",
      title: "Leo Triplet",
      link: "/leotriplet"
    },
    {
      image: "/jpgPictures/PacmanNebula.jpg",
      title: "The Pacman Nebula",
      link: "/pacmannebula"
    },
    {
      image: "/jpgPictures/Whirlpool_Galaxy.jpg",
      title: "The Whirlpool Galaxy",
      link: "/whirlpoolgalaxy"
    },
    {
      image: "/jpgPictures/HorseheadNebula.jpg",
      title: "The Horsehead Nebula",
      link: "/horseheadnebula"
    },
    {
      image: "/jpgPictures/OrionNebula.jpg",
      title: "The Orion Nebula",
      link: "/orionnebula"
    },
    {
      image: "/jpgPictures/NGC7822.jpg",
      title: "NGC 7822",
      link: "/ngc7822"
    },
    {
      image: "/jpgPictures/LobsterClawBubbleHB-clear.jpg",
      title: "The Lobster Claw and Bubble Nebula",
      link: "/lobsterclawbubble"
    },
    {
      image: "/jpgPictures/CaliforniaNebula.jpg",
      title: "The California Nebula",
      link: "/californianebula"
    },
    {
      image: "/jpgPictures/CygnusWallHubble-topaz.jpg",
      title: "The Cygnus Wall",
      link: "/cygnuswall"
    },
    {
      image: "/jpgPictures/PelicanNebula.jpg",
      title: "The Pelican Nebula",
      link: "/pelicannebula"
    },
    {
      image: "/jpgPictures/Heart%20Nebula.jpg",
      title: "The Heart Nebula",
      link: "/heartnebula"
    },
    {
      image: "/jpgPictures/crescentNebula.jpg",
      title: "Crescent Nebula",
      link: "/crescentnebula"
    },
    {
      image: "/jpgPictures/Pillars_core.jpg",
      title: "Eagle Nebula",
      link: "/eagle-nebula"
    },
    {
      image: "/jpgPictures/Veil%20Nebula.jpg",
      title: "The Veil Nebula",
      link: "/veilnebula"
    },
    {
      image: "/jpgPictures/M13_wtrmrk.jpg",
      title: "M13, Hercules Cluster",
      link: "/m13"
    },
    {
      image: "/jpgPictures/M31-130pds.jpg",
      title: "Andromeda",
      link: "/m31"
    },
    {
      image: "/jpgPictures/M33.jpg",
      title: "M33, The Triangulum Galaxy",
      link: "/m33"
    },
    {
      image: "/jpgPictures/IrisNebula.jpg",
      title: "The Iris Nebula",
      link: "/irisnebula"
    },
    {
      image: "/jpgPictures/elephants_trunk.jpg",
      title: "The Elephant's Trunk",
      link: "/elephantstrunk"
    },
    {
      image: "/pictures/test-nebula.jpg",
      title: "Test Nebula",
      link: "/test-nebula"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      {/* Gallery Header */}
      <header className="pt-24 pb-12 px-4">
        <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
          Astrophotography Gallery
        </h1>
      </header>

      {/* Gallery Grid */}
      <main className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative aspect-square overflow-hidden rounded-lg bg-black/20 transform transition-all duration-300 hover:scale-105"
            >
              <Link 
                to={item.link} 
                className="block w-full h-full"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-xl font-semibold text-center">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default GalleryPage;