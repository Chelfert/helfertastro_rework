import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const PacmannebulaPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/PacmanNebula.jpg`}
        locationImage={`/Locations/PacmanNebula.jpg`}
        acquisitionDate={`
            Acquisition: Skywatcher-130PDS. October, 2022
            
                
                Download Pacman Nebula
            
        `}
        quickFacts={[]}
        description={`The Pacman Nebula (NGC 281) is a cosmic cloud of space gas located in the constellation Cassiopeia. 
                It gets its name from the classic video game character it resembles. 
                It features a dark dust lane that forms the Pac-Man's mouth. This Nebula is located within the Perseus arm of the Milky Way galaxy. In infrared imagery, the dust lane in the mouth of the nebula glows brightly.`}
      />
    </div>
  );
};

export default PacmannebulaPage;