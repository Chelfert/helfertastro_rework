import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const FlamingstarPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/Pictures/FlamingStar.png`}
        locationImage={`/Locations/FlamingStar.png`}
        acquisitionDate={`
        Acquisition: AT115EDT. December, 2023
    `}
        quickFacts={[]}
        description={`The Flaming Star Nebula, named after its intricate dust lanes is located in the Auriga Constellation. The bright star located left-center, AE Auriga, is so hot it ionizes the surrounding gas, knocking electrons loose. When an electron is recaptured by a proton, red light is usually emitted, shown here in orange.`}
      />
    </div>
  );
};

export default FlamingstarPage;