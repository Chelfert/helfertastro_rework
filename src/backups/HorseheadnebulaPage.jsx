import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const HorseheadnebulaPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/Horsehead.jpg`}
        locationImage={`/Locations/HorseheadNebula.png`}
        acquisitionDate={`
            Acquisition: Skywatcher-130PDS. December, 2022
            
                
                Download Horsehead Nebula
            
        `}
        quickFacts={[]}
        description={`The Horsehead Nebula, located in the constellation Orion just south of the star Alnitak, is approximately 1,375 light-years away from Earth. 
                This dark nebula, part of the Orion Molecular Cloud Complex, is a dense region of gas and dust that blocks the light from stars behind it, giving it a distinctive shape resembling a horse’s head. The nebula spans about 3.5 light-years in height and 2.5 light-years in width. 
                Known for its active star formation, the Horsehead Nebula is a fascinating site where new stars are being born, contributing to the dynamic processes within our galaxy.`}
      />
    </div>
  );
};

export default HorseheadnebulaPage;