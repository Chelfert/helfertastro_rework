import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Camera, Star, Compass, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModernAstroSite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const slides = [
    {
        image: "/pictures/test-nebula.jpg",
        title: "test nebula",
        link: "/targets/test-nebula"
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

      {/* Hero Section */}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
        <div className="absolute top-0 w-full h-full bg-center bg-cover" 
             style={{backgroundImage: 'url("/jpgPictures/M31-130pds.jpg")', backgroundPosition: 'center'}}>
          <div className="absolute bg-black opacity-75 inset-0"></div>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-5xl font-bold mb-6">Explore the Universe</h1>
                <p className="mt-4 text-lg">
                  The purpose of this website is to share my love of the Universe with as many people as I can. 
                  Every picture was taken from Madison, Alabama.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Images Carousel */}
      <div className="relative max-w-6xl mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold text-center mb-8">Recent Captures</h2>
  <div className="relative aspect-video overflow-hidden rounded-lg">
    <Link to={slides[currentSlide].link}>
      <img 
        src={slides[currentSlide].image}
        alt={slides[currentSlide].title}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
        <h3 className="text-xl font-semibold text-center">{slides[currentSlide].title}</h3>
      </div>
    </Link>
    <button 
      onClick={(e) => {
        e.preventDefault();
        setCurrentSlide(curr => (curr === 0 ? slides.length - 1 : curr - 1));
      }} 
      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/75 transition-colors z-10"
    >
      <ChevronLeft size={24} />
    </button>
    <button 
      onClick={(e) => {
        e.preventDefault();
        setCurrentSlide(curr => (curr === slides.length - 1 ? 0 : curr + 1));
      }}
      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/75 transition-colors z-10"
    >
      <ChevronRight size={24} />
    </button>
  </div>
</div>

      {/* Equipment Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Equipment</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <Star className="w-12 h-12 mb-4 mx-auto text-blue-400" />
              <h3 className="text-xl font-semibold mb-4 text-center">Telescope</h3>
              <ul className="space-y-2">
                <li>Astro-Tech 115EDT</li>
                <li>EQ6-R Pro Mount</li>
                <li>ZWO On-axis-guider</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <Camera className="w-12 h-12 mb-4 mx-auto text-blue-400" />
              <h3 className="text-xl font-semibold mb-4 text-center">Camera</h3>
              <ul className="space-y-2">
                <li>ZWO ASI1600MM Pro</li>
                <li>ASI220MM Guide Camera</li>
                <li>Antlia Filters</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <Compass className="w-12 h-12 mb-4 mx-auto text-blue-400" />
              <h3 className="text-xl font-semibold mb-4 text-center">Software</h3>
              <ul className="space-y-2">
                <li>NINA Sequencing</li>
                <li>PHD2 Guiding</li>
                <li>Pixinsight Processing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernAstroSite;