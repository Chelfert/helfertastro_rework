import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const NorthamericanandpelicanPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/NorthAmericanNebula.jpg`}
        locationImage={`/Locations/NorthAmericanNebula.png`}
        acquisitionDate={`
    Acquisition: AT115EDT. July, 2024
    
        
        Download North America Nebula
    
`}
        quickFacts={[]}
        description={`The North American Nebula is an ionized-hydrogen region within the Cygnus constellation. located about 1,700 Lightyears from the sun, this nebula lies in the Orion arm of the Milky Way. 
                With a diameter of 100 Lightyears, the North American Nebula is roughly 587.86 Trillion miles wide. This nebula was given its name due to its resemblance to the continent of North America. 
                If you could see this with your naked eye, it would cover the same area of 10 full moons in the night sky.`}
      />
    </div>
  );
};

export default NorthamericanandpelicanPage;