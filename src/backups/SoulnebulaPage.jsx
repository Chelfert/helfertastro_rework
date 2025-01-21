import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const SoulnebulaPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/sho_soulnebula.jpg`}
        locationImage={`/Locations/SoulNebula.png`}
        acquisitionDate={`
                Acquisition: AT115EDT. October, 2023.
            `}
        quickFacts={[]}
        description={`The Soul Nebula, or IC1848 is a star forming region roughly 6,500 light-years away in the constellation Cassiopeia.
                 The Redness of this nebula is from the ionization of its Hydrogen gas.
                  Located right next to the Heart Nebula, the Soul Nebula has a diameter of 100 light-years. 
                  For comparison, the Milky Way has a diameter of 100,000 light-years, while Andromeda has a diameter of 220,000 light-years. 
                  If you wanted to walk to the Soul Nebula with an average speed of 4mph, 
                it would only take you 1,257,406,179,375 years to reach your destination.`}
      />
    </div>
  );
};

export default SoulnebulaPage;