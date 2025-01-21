import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const Ic342Page = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/IC342_LRGBHA.png`}
        locationImage={`/Locations/IC342.png`}
        acquisitionDate={`
        Acquisition: AT115EDT. November, 2023
        
    `}
        quickFacts={[]}
        description={`IC 342 is located "relatively" close to the Milky Way, estimated between 7 - 11 Million light years away. IC 342 lies on the galactic equator of the Milky way, which makes it hard to accurately determine it's distance.
        Due to its location in reference to our own galaxy, IC 342 has earned the nickname, "The hidden Galaxy". This galaxy has a Hydrogen-Alpha nucleus, which is which there are red chunks in its arms. This galaxy is one of the closest galaxies to the Local Group.`}
      />
    </div>
  );
};

export default Ic342Page;