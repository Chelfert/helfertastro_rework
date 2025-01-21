import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const RosettenebulaPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/Rosette_final.jpg`}
        locationImage={`/Locations/RosetteNebula.png`}
        acquisitionDate={`
            Acquisition: AT115EDT. December, 2023
            
                
                Download Rosette Nebula
            
        `}
        quickFacts={[]}
        description={`The Rosette Nebula is an HII region located roughly 5,000 light-years away in the constellation Monoceros. This nebula, and the star cluster located within can best be seen
                during the winter. The Rosette Nebula contains around 10,000 solar masses. Due to the strong presence of Hydrogen-II gas, this is a great target for astronomers taking advantage of narrowband filters. The star cluster located within
                the heart of the Rosette nebula named NGC 2244 was actually discovered well before the nebula surrounding it.`}
      />
    </div>
  );
};

export default RosettenebulaPage;