import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const M13Page = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/M13_wtrmrk.jpg`}
        locationImage={`/Locations/M13.png`}
        acquisitionDate={`
            Acquisition: SkyWatcher 130-PDS. August, 2022
            
                
                Download M13
            
        `}
        quickFacts={[]}
        description={`The Elephant's Trunk Nebula is located in the constellation Cepheus, within the giant interstellar gas cloud known as IC 1396. The Nebula is located at the bottom part of the cloud, reaching up towards the middle. 
                The Elephant's trunk is 20 Lightyears long, while the gas cloud it is located in is roughly 100 Lightyears across, which makes IC 1396 one of the largest nebula in the North American sky.`}
      />
    </div>
  );
};

export default M13Page;