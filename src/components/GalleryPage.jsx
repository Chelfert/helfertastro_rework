import React from 'react';

const GalleryPage = () => {
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
    }
    // Add more gallery items here
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation - reusing from ModernAstroSite */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <img 
                src="/Clayton_AstroPhotoLogo/Helfert_AstroLogoWhite.png" 
                alt="Helfert Astrophotography"
                className="h-8"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-white hover:text-blue-400 transition-colors">Home</a>
              <a href="/gallery" className="text-white hover:text-blue-400 transition-colors">Gallery</a>
              <a href="/localConditions.html" className="text-white hover:text-blue-400 transition-colors">Local Conditions</a>
              <a href="/equipment.html" className="text-white hover:text-blue-400 transition-colors">Equipment</a>
            </div>
          </div>
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