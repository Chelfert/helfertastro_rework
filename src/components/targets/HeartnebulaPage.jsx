import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const HeartnebulaPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/Heart%20Nebula.png`}
        locationImage={`/Locations/HeartNebula.png`}
        acquisitionDate={`
            Acquisition: SkyWatcher 130-PDS. December, 2022
            
                
                Download Heart Nebula
            
        `}
        quickFacts={[]}
        description={`The Heart Nebula is located about 7,500 light-years from Earth within the Perseus arm of the Milky Way
                in the constellation Cassiopeia.
                IC 1805 is an emission nebula, mainly consisting of ionized Sulfur, Hydrogen and Oxygen.
                The gas in this nebula is ionized from the group of stars in the middle of the nebula (known as Melotte
                15 and Collinder 26).
                This cluster contains a few stars which are 50 times the mass of our own Sun, and plenty of stars that
                are only a fraction of the Sun. These brighter stars emit stellar wind that pushes the gas and dust
                away, giving the nebula its unique shape.
                If you could see the gas with your naked eye, it would cover 2 degrees in the sky which is about four
                times the diameter of a full moon.`}
      />
    </div>
  );
};

export default HeartnebulaPage;