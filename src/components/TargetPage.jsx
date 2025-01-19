import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const TargetPage = ({ 
  title,
  mainImage,
  locationImage,
  acquisitionDate,
  acquisitionScope,
  quickFacts,
  description
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50">
        {/* Same navigation as GalleryPage */}
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-12 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">{title}</h1>
        
        {/* Main Image */}
        <div className="max-w-4xl mx-auto mb-12">
          <img 
            src={mainImage} 
            alt={title}
            className="w-full rounded-lg shadow-xl"
          />
        </div>

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

        {/* Acquisition Info */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-300">
            Acquisition: {acquisitionScope}, {acquisitionDate}
          </p>
          <a href={mainImage} download className="inline-block mt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Download Image
            </button>
          </a>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
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