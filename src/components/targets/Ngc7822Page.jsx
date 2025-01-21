import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const Ngc7822Page = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/NGC7822.jpg`}
        locationImage={`/Locations/NGC7822.png`}
        acquisitionDate={`
            Acquisition: SkyWatcher 130-PDS. September, 2022
            
                
                Download NGC 7822
            
        `}
        quickFacts={[]}
        description={`NGC 7822 is a star forming complex located roughly 3,000 light-years away in the constellation Cepheus. 
                The radiation from the stars being born here ionizes the gas and forms the nebula with stellar wind. Within the dark, dusty clouds, stars are more than likely going through a process of being created.`}
      />
    </div>
  );
};

export default Ngc7822Page;