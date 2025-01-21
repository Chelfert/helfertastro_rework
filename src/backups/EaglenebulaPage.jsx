import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const EaglenebulaPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/PillarsCreation.jpg`}
        locationImage={`/Locations/EagleNebula.png`}
        acquisitionDate={`
        Acquisition: AT115EDT. May, 2024
        
            
            Download Pillars of Creation
        
    `}
        quickFacts={[]}
        description={`The Eagle's nebula is an active star forming region in the Serpens constellation. 
                This nebula spans 70 x 50 Lightyears and is about 5.5 Million years old. Inside a nebula like this, gravity pulls gas inwards towards the center and if enough is present, nuclear fusion ignites and the compacted cloud becomes a new star. 
                The Eagle nebula is also home to the famous Pillars of Creation.`}
      />
    </div>
  );
};

export default EaglenebulaPage;