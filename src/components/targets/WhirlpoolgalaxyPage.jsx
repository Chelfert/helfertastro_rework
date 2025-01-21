import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const WhirlpoolgalaxyPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/Whirlpool_Galaxy.jpg`}
        locationImage={`/Locations/WhirlpoolGalaxy.png`}
        acquisitionDate={`
            Acquisition: SkyWatcher 130-PDS. February, 2023
            
                
                Download Whirlpool Galaxy
            
        `}
        quickFacts={[]}
        description={`M51 or the Whirlpool Galaxy, is a two-armed spiral galaxy located in the Canes Venatici constellation roughly 31 million light-years away from Earth. 
                Discovered and catalogued by Charles Messier in 1773, M51 was the first official spiral galaxy. M51’s companion galaxy, NGC 5195 was subsequently discovered in 1781 by Pierre Méchain, although at the time it was not known that they were interreacting or just a galaxy caught in the distance. 
                NGC 5195 has a distinguishing characteristic most commonly referred to as “The Crown”. You can see this 3-pronged feature above the galaxy. NGC 5195’s influence on M51 has greatly exaggerated the overall spiral structure of the Whirlpool galaxy. The Whirlpool Galaxy is home to the first ever confirmed extragalactic planet, M51-ULS-1b. 
                This planet is slightly smaller than Saturn, and orbits at about 10 Astronomical-Units.`}
      />
    </div>
  );
};

export default WhirlpoolgalaxyPage;