import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const VeilnebulaPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/PickeringsTriangle.jpg`}
        locationImage={`/Locations/VeilNebula.png`}
        acquisitionDate={`
    Acquisition: AT115EDT. December, 2023
    
        
        Download Pickering's Triangle
    
`}
        quickFacts={[]}
        description={`The Veil Nebula is a cloud of heated and ionized gas in the Cygnus constellation.
            This Nebula is a supernova remnant of a star 20 times the size of our sun that exploded around 10,000 years ago.
            An explosion of this magnitude was visible in daylight, and would have been about the size of Venus.
            The bright colors you see (Red - Ionized Hydrogen, Blue - Ionized Oxygen) are a result of the extreme force
            of the explosion, moving debris to speeds of around 370,000 miles-per-hour which create shock-waves that
            heat the surrounding gas to millions of degrees.
            It is the subsequent cooling of the gas that creates such vibrant colors.
            Although only about one star per century in the milky way will end its life in such spectacular fashion,
            these explosions are responsible for making all elements heavier than Iron, as well as being the main
            producers of Oxygen in the Universe.
            For example, metal elements such as Copper, Mercury and Gold are forged in explosions like the one that
            created the Veil Nebula.
            The elements that created Earth, and that are inside every one of us, were created from and distributed by
            supernovas just like the one you see here.`}
      />
    </div>
  );
};

export default VeilnebulaPage;