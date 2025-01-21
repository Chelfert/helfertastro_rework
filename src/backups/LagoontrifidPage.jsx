import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const LagoontrifidPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/LagoonNebula.jpg`}
        locationImage={`/Locations/LagoonNebula.png`}
        acquisitionDate={`
    Acquisition: AT115EDT. July, 2024.
    
        
        Download Lagoon Nebula
    
`}
        quickFacts={[]}
        description={`This is a look at the same nebula, but only light captured in the sulfur and oxygen wavelengths.\n\nThe Lagoon (M8) and Trifid (M20) Nebula are located at the spout of the "teapot" in the Sagittarius constellation. 
                Sagittarius is located in the densest part of the Milky Way core.The brighter ball on the left is the Trifid Nebula, which is a larger, but further nebula. 
                The area the Lagoon nebula covers is 55 x 110 Lightyears, but does not appear this way to us since it is roughly 5,200 Lightyears from the Earth. With a magnitude of 6, this is the darkest a deep-sky object can be viewable with the naked eye, given you have exceptional eyesight. 
                Looking at the night sky, the Lagoon nebula would be as large as two full moons. Both nebulas are comprised of mostly ionized Hydrogen gas. When the energy from new or dying stars passes through these giant clouds of Hydrogen, it ionizes the gas which makes it glow. When the energy is low, it will glow with a red tint. 
                The darker parts of these nebula are where most of their stars are being formed.`}
      />
    </div>
  );
};

export default LagoontrifidPage;