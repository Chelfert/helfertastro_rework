import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const PerseusclusterPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/PerseusCluster.jpg`}
        locationImage={`/Locations/PerseusCluster.png`}
        acquisitionDate={`
                Acquisition: AT115EDT. October, 2023.
            `}
        quickFacts={[]}
        description={`NGC 869 and 884 is a double cluster located in the Perseus Arm of the Milky Way Galaxy. 
            Each cluster is surrounded by a halo of stars, which give each cluster its impressive Solar-Mass count. 
            Each cluster contains roughly 300-400 stars, with NGC 869 being the more dense of the two.
            At an age of 14 Million years old, this is considered quite young compared to the much older and closer Pleiades star cluster (1500 light-years away and 75-150 Million years old.).
            If the Perseus double cluster was that close, the stars from the clusters would occupy a quarter of the sky, and would contain some of the sky's brightest stars.`}
      />
    </div>
  );
};

export default PerseusclusterPage;