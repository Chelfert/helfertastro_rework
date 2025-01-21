import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const CalifornianebulaPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/CaliforniaNebulaVis.png`}
        locationImage={`/Locations/CaliforniaNebula.png`}
        acquisitionDate={`
        Acquisition: SkyWatcher 130-PDS. November, 2022
        
        
            
            Download
            
    `}
        quickFacts={[]}
        description={`The California Nebula is an emission nebula located roughly 1,000 light-years away near the constellation of perseus. 
            This nebula received its name due to its shape resembling the state of California. The California Nebula reaches about 100 light-years in diameter, and has a visual magnitude of 6.0. 
            This makes it extremely hard to see with the unaided eye. This nebula is formed of gas that is ionized by a nearby massive blue star, Menkib, which is roughly 30 times more massive than the sun. 
            Menkib is one of the hottest stars visible with the naked eye.`}
      />
    </div>
  );
};

export default CalifornianebulaPage;