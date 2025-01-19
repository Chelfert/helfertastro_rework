

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const TargetPage = ({ 
  title,
  images,
  locationImage,
  quickFacts,
  description
}) => {
  console.log('TargetPage rendering with props:', { title, images, locationImage, quickFacts });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          {/* Mobile menu */}
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

      {/* Main Content */}
      <div className="pt-24 pb-12 container mx-auto px-4">
        {/* Main Images Section */}
        {images.map((imageData, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              {imageData.title}
            </h2>
            
            <div className="max-w-4xl mx-auto mb-8">
              <img 
                src={imageData.image} 
                alt={imageData.title}
                className="w-full rounded-lg shadow-xl"
              />
            </div>

            {/* Acquisition Info */}
            <div className="text-center mb-8">
              <p className="text-lg text-gray-300">
                Acquisition: {imageData.acquisitionScope}, {imageData.acquisitionDate}
              </p>
              <a href={imageData.image} download className="inline-block mt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                  {imageData.downloadText}
                </button>
              </a>
            </div>
          </div>
        ))}

        {/* Location Image */}
        {locationImage && (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Location in Sky</h2>
            <div className="max-w-4xl mx-auto mb-12">
              <img 
                src={locationImage} 
                alt={`Sky location of ${title}`}
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </>
        )}

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
          {/* Quick Facts */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Quick Facts</h2>
            <ul className="space-y-3">
              {quickFacts.map((fact, index) => (
                <li key={index} className="text-gray-300">{fact}</li>
              ))}
            </ul>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Description</h2>
            <p className="text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetPage;