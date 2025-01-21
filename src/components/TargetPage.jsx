import React, { useState } from 'react';
import { X } from 'lucide-react';
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
  const [selectedImage, setSelectedImage] = useState(null);

  // Image Modal component
  const ImageModal = ({ image, title, onClose }) => (
    <div 
      className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center cursor-zoom-out"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-[101]"
      >
        <X size={32} />
      </button>
      <img 
        src={image} 
        alt={title}
        className="max-w-[95vw] max-h-[95vh] object-contain cursor-default"
        onClick={e => e.stopPropagation()}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Main Content */}
      <div className="pt-24 pb-12 container mx-auto px-4">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {title}
        </h1>

        {/* Main Image */}
        <div className="max-w-4xl mx-auto mb-8">
          <img 
            src={mainImage} 
            alt={title}
            className="w-full rounded-lg shadow-xl cursor-pointer"
            onClick={() => setSelectedImage({ image: mainImage, title })}
          />
        </div>

        {/* Location in Sky Section */}
        {locationImage && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-6">Location in Sky</h2>
            <div className="max-w-4xl mx-auto mb-8">
              <img 
                src={locationImage} 
                alt={`Sky location of ${title}`}
                className="w-full rounded-lg shadow-xl cursor-pointer"
                onClick={() => setSelectedImage({ image: locationImage, title: 'Location in Sky' })}
              />
            </div>
          </div>
        )}

        {/* Acquisition Info */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-300">
            {acquisitionDate}
          </p>
          <p className="text-lg text-gray-300">
            {acquisitionScope}
          </p>
          <a href={mainImage} download className="inline-block mt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Download {title}
            </button>
          </a>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Quick Facts */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-6">Quick Facts</h3>
            <ul className="space-y-3">
              {quickFacts.map((fact, index) => (
                <li key={index} className="text-gray-300">
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-6">Description</h3>
            <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
              {description}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage.image}
          title={selectedImage.title}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default TargetPage;