import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const PelicannebulaPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/PelicanNebula.png`}
        locationImage={`/Locations/PelicanNebula.png`}
        acquisitionDate={`
            Acquisition: SkyWatcher 130-PDS. September, 2022
            
                
                Download Pelican Nebula
            
        `}
        quickFacts={[]}
        description={`Located near the tail of Cygnus, the Pelican Nebula is a region of ionized Hydrogen and Oxygen. IC 5070’s close proximity to the very large star Deneb gives the nebula its beautiful intricate dust lanes. 
                The Pelican Nebula is an active star formation region that is heavily studied. The pulsating gasses from stars being born within this nebula push the interstellar dust, giving the nebula its overall shape.`}
      />
    </div>
  );
};

export default PelicannebulaPage;