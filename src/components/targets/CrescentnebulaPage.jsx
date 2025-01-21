import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const CrescentnebulaPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/crescentNebula.jpg`}
        locationImage={`/Locations/CrescentNebula.png`}
        acquisitionDate={`
            Acquisition: AT115EDT. July, 2023
            
                
                Download Crescent Nebula
            
        `}
        quickFacts={[]}
        description={`The Crescent Nebula, or NGC 6888 is an emission nebula that spans roughly 25 Light Years in diameter. 
                NGC 6888 is located roughly 5000 Light Years away in the constellation Cygnus. The Crescent Nebula is the product of a type of star known as a “Wolf-Rayet”, which are massive objects that are aging and shed their mass at extreme rates. 
                This Wolf-Rayet is shedding its outer layers at a pace of the mass of our Sun every 10,000 years. It is believed that the star in the center of NGC 6888 will eventually end its life in a violent explosion known as a Supernova.`}
      />
    </div>
  );
};

export default CrescentnebulaPage;