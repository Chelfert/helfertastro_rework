import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const LobsterclawbubblePage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/LobsterClawBubbleHB-clear.png`}
        locationImage={`/Locations/LobsterClaw.png`}
        acquisitionDate={`
            Acquisition: SkyWatcher 130-PDS. August, 2022.
            
                
                Download Lobster Claw Nebula
            
        `}
        quickFacts={[]}
        description={`The Lobster Claw nebula is an active star forming region located roughly 8,000 light-years away in the constellation of Scorpius. 
                The Bubble Nebula is the result of a star (BD +60°2522) roughly 45 times more massive than our sun burning so hot that gas escapes and forms a stellar wind around the star. 
                Due to the gas's extreme heat, it is moving at more than 4,000,000 mph.`}
      />
    </div>
  );
};

export default LobsterclawbubblePage;