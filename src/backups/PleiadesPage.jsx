import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const PleiadesPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/M45.jpg`}
        locationImage={`/Locations/Pleiades.png`}
        acquisitionDate={`
                Acquisition: Skywatcher-130PDS. October, 2022.
            `}
        quickFacts={[]}
        description={`Messier 45, or more commonly known as The Pleiades is a group of seven stars in the constellation Taurus. The Pleiades were prominent in Greek Mythology, as they were believed to be the "Seven Sisters".
            The seven daughters of Atlas caught the eye of Orion, the hunter. Since Atlas was condemned to carry the weight of the world on his shoulders, Orion was free to pursue his daughters. Zeus intervened and transformed the daughters into doves,
            then eventually into stars. However, Orion still chases the Pleiades in the form of his own constellation, that closely follows behind the Pleiades every year.`}
      />
    </div>
  );
};

export default PleiadesPage;