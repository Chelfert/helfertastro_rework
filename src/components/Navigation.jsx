import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="inline-block">
              <img 
                src="/Clayton_AstroPhotoLogo/Helfert_AstroLogoWhite.png" 
                alt="Helfert Astrophotography"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-white hover:text-blue-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-blue-400 transition-colors duration-200">Home</Link>
            <Link to="/gallery" className="text-white hover:text-blue-400 transition-colors duration-200">Gallery</Link>
            <Link to="/local-conditions" className="text-white hover:text-blue-400 transition-colors duration-200">Local Conditions</Link>
            <Link to="/equipment" className="text-white hover:text-blue-400 transition-colors duration-200">Equipment</Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90">
              <Link to="/" className="block text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200">Home</Link>
              <Link to="/gallery" className="block text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200">Gallery</Link>
              <Link to="/local-conditions" className="block text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200">Local Conditions</Link>
              <Link to="/equipment" className="block text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200">Equipment</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;