import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const Ic63Page = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/IC63.jpg`}
        locationImage={`/Locations/IC63.png`}
        acquisitionDate={`
            Acquisition: AT115EDT. September, 2024
            
                
                Download Ghost Nebula
            
        `}
        quickFacts={[]}
        description={`IC 63, often referred to as the Ghost of Cassiopeia, is a striking nebula located in the constellation Cassiopeia. This nebula is both an emission and reflection nebula, meaning it glows due to both the emission of light from ionized gas and the reflection of light from nearby stars. 
                The nebula is being sculpted by the powerful ultraviolet radiation from the nearby blue-giant star Gamma Cassiopeiae, which causes the hydrogen gas within IC 63 to glow with a characteristic red light. The blue hues seen in the nebula are due to the reflection of Gamma Cassiopeiae's light off the dust particles within the nebula.`}
      />
    </div>
  );
};

export default Ic63Page;