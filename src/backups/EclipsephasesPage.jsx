import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const EclipsephasesPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/EclipsePhases_Helfert.png`}
        locationImage={``}
        acquisitionDate={`
            Acquisition: SkyWatcher 130-PDS. November, 2022
            
                
                Download Eclipse Phases
            
        `}
        quickFacts={[]}
        description={`The Moon is the brightest object in the night sky with an apparent magnitude of -12.6 (negative numbers are the brightest). Earth’s moon is responsible for stabilizing the Earth’s axis wobble, which makes the planet’s climate relatively steady. 
                The Moon is also responsible for the tides on earth, which have influenced life from its very beginning stages. Although it is not certain, it is theorized that the Moon formed after a Mars-sized body collides with the Earth billions of years ago. 
                The Moon is the 5th largest moon out of a total of 200 in our solar system. Human’s named this moon “The Moon” because at the time they didn’t know any other moons existed. This changed in 1610 when Galileo Galilei discovered four moons orbiting Jupiter. 
                The Moon is the only other planetary object that humans have ever stepped foot on.`}
      />
    </div>
  );
};

export default EclipsephasesPage;