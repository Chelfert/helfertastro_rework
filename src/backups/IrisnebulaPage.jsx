import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const IrisnebulaPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/IrisNebula.png`}
        locationImage={`/Locations/IrisNebula.png`}
        acquisitionDate={`
            Acquisition: SkyWatcher 130-PDS. September, 2022
            
                
                Download Iris Nebula
            
        `}
        quickFacts={[]}
        description={`The Iris Nebula or NGC 7023, is a reflection nebula located in the Cepheus constellation. This nebula is unlike most nebulae because of the lack of ionized gasses. 
                Reflection nebulae glow because of extremely tiny dust particles, 10 - 100 times smaller than dust here on earth. This dust diffuses light coming from a bright star which gives off a bluish hue.`}
      />
    </div>
  );
};

export default IrisnebulaPage;