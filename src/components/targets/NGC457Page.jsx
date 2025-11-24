import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const NGC457Page = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/NGC457.jpg`}
        locationImage={`/Locations/OwlCluster.png`}
        acquisitionDate={`
                Acquisition: AT115EDT. November, 2025.

                Download Owl Cluster
            `}
        quickFacts={[]}
        description={`            NGC 457 is a young open cluster located in the constellation Cassiopeia, situated along 
            the dense star fields of the Milky Way’s Perseus Arm. Commonly known as the “Owl Cluster” 
            or “ET Cluster,” it is instantly recognizable thanks to the two bright stars — 
            Phi Cassiopeiae and HD 7902 — which form the “eyes” of an owl-like asterism. Surrounding 
            these bright foreground stars lie roughly 80–100 cluster members, with many more faint 
            stars contributing to the cluster’s overall mass.
            <br><br>
            Estimated at 20–25 million years old, NGC 457 is relatively young. Phi Cassiopeiae, the 
            brightest “eye,” is an extremely luminous F-type supergiant whose brilliance enhances the 
            cluster’s iconic shape despite not being a physical member.
            <br><br>
            If NGC 457 were located as close as the Pleiades, its owl-shaped pattern would span a much 
            larger portion of the sky, and several of its stars would be as bright as the brightest 
            naked-eye objects. Its distinctive appearance and rich star field make it a favorite 
            target for astrophotographers and observers alike.`}
      />
    </div>
  );
};

export default NGC457Page;