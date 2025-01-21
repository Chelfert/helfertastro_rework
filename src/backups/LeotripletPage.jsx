import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const LeotripletPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/Leo_triplet.png`}
        locationImage={`/Locations/LeoTriplet.png`}
        acquisitionDate={`
            Acquisition: AT115EDT. February, 2023
            
                
                Download Leo Triplet
            
        `}
        quickFacts={[]}
        description={`The Leo triplet is a group of galaxies M65, M66 and NGC 3628 (top-left, top-right and bottom respectively) located within the leg of the Leo constellation. 
                NGC 3628 has earned the nickname “The Hamburger Galaxy” among astronomers. This group of galaxies lies at a distance of roughly 30 million Light-years, or 176,358,761,195,511,021,568 miles away. 
                If the goal of the Apollo 10 Moon mission was to take a trip to one of the galaxies in the Leo triplet, it would only take them 812 Billion years to get there. 
                It’s safe to say these galaxies are just out of reach, but are close enough that we can observe their beauty as they were 30 million years ago. Unfortunately, since these galaxies are so far away we don’t know too much about them.`}
      />
    </div>
  );
};

export default LeotripletPage;