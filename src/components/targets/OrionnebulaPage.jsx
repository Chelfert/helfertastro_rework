import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const OrionnebulaPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/OrionNebula.png`}
        locationImage={`/Locations/OrionNebula.png`}
        acquisitionDate={`
            Acquisition: SkyWatcher 130-PDS. November, 2022
            
                
                Download Orion Nebula
            
        `}
        quickFacts={[]}
        description={`M42 or the Orion Nebula is the closest stellar nursery to the earth, at around 1,500 light-years away with an apparent magnitude of 4. 
                Given its close proximity to earth and its brightness, the Orion nebula is one of the few deep space objects that can be seen with the naked eye. 
                The Mayan culture dubbed the Orion Nebula as “the cosmic fire of creation”. Which is surprisingly accurate. The Orion Nebula is a part of a much more grand cosmic network - the Orion Molecular Cloud Complex (A.K.A. The Orion Complex). The Orion complex consists of Orion A Cloud (The Orion Nebula), Orion B Cloud (Horsehead and Flame Nebula) and many others. 
                Though the Orion Nebula is one of the most active star forming nebulae, not every star is a success. Blue giants comprise the majority of the Orion Nebula’s stars, but there are a few “failures” or brown dwarfs. The first observation of the Orion Nebula was with a telescope in the year 1610 by a French scholar named Nicolas=Claude Fabri de Peiresc. 
                According to the European Space Agency, our own sun was most likely formed in a very similar cloud to the Orion Nebula, roughly 4.5 billion years ago.`}
      />
    </div>
  );
};

export default OrionnebulaPage;