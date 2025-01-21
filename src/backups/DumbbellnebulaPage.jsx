import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const DumbbellnebulaPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/DumbbellNebula.jpg`}
        locationImage={`/Locations/DumbbellNebula.jpg`}
        acquisitionDate={`
            Acquisition: AT115EDT. August, 2024
            
                
                Download Dumbbell Nebula
            
        `}
        quickFacts={[]}
        description={`The Dumbbell Nebula, also known as Messier 27 (M27) or NGC 6853, 
                is a planetary nebula located approximately 1,360 light-years away in the constellation Vulpecula. 
                This nebula, with its distinctive dumbbell shape, can be best observed during the summer months. 
                The Dumbbell Nebula spans about 2.5 light-years in diameter and is a popular target for amateur astronomers due to its brightness and size. The nebula is formed from ionized gases ejected by a dying red giant star, and its central region is illuminated by a hot white dwarf. This makes it an excellent subject for those using narrowband filters to capture its intricate details. The central white dwarf, 
                larger than most known white dwarfs, was discovered well before the surrounding nebula was fully understood.`}
      />
    </div>
  );
};

export default DumbbellnebulaPage;