import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const CygnuswallPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/CygnusWallHubble-topaz.png`}
        locationImage={`/Locations/CygnusWall.png`}
        acquisitionDate={`
            Acquisition: SkyWatcher 130-PDS. July, 2022
            
                
                Download Cygnus Wall
            
        `}
        quickFacts={[]}
        description={`The Cygnus Wall is located in the North American Nebula (NGC 7000) and is roughly 15 light-years in diameter. 
                This pocket of gas is the most active star forming region in the North American Nebula. 
                The Cygnus wall lies about 1,700 light-years away in the constellation of Cygnus.`}
      />
    </div>
  );
};

export default CygnuswallPage;