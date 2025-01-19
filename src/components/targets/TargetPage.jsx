// TargetPage.jsx
import React, { useState } from 'react';
import { Menu, X, ZoomIn } from 'lucide-react';  // Add ZoomIn icon
import { Link } from 'react-router-dom';


// Add ImageModal component
// Add this to TargetPage.jsx
const ImageModal = ({ image, title, onClose }) => {
  // Add ESC key handler
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
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
};
const TargetPage = ({ 
  title,
  images,
  locationImage,
  quickFacts,
  description
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation remains the same */}
      
      {/* Main Content */}
      <div className="pt-24 pb-12 container mx-auto px-4">
        {/* Main Images Section */}
        {images.map((imageData, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              {imageData.title}
            </h2>
            
            <div className="max-w-4xl mx-auto mb-8 relative group">
              <img 
                src={imageData.image} 
                alt={imageData.title}
                className="w-full rounded-lg shadow-xl cursor-pointer transition-transform hover:opacity-95"
                onClick={() => setSelectedImage(imageData)}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="text-white w-12 h-12" />
              </div>
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
            <div className="max-w-4xl mx-auto mb-12 relative group">
              <img 
                src={locationImage} 
                alt={`Sky location of ${title}`}
                className="w-full rounded-lg shadow-xl cursor-pointer transition-transform hover:opacity-95"
                onClick={() => setSelectedImage({ image: locationImage, title: 'Location in Sky' })}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="text-white w-12 h-12" />
              </div>
            </div>
          </>
        )}

        {/* Info Grid remains the same */}
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