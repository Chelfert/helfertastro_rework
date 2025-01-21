import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const M33Page = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/M33.jpg`}
        locationImage={`/Locations/m33.png`}
        acquisitionDate={`
            Acquisition: AT115EDT. November, 2024
            
                
                Download M33
            
        `}
        quickFacts={[]}
        description={`Located 2.73 million light-years away, the Triangulum Galaxy or M33, is one of the larger galaxies in our Local Group. According to a survey done in 2015, “The star formation rate intensity is 10 times higher than the area surveyed in the Andromeda Galaxy”. The Triangulum galaxy is about 60% the diameter of the Milky Way, and contains far less stars, about 40 Billion, compared to the Milky Way’s 100 - 400 billion and Andromeda’s one trillion stars. M33 was likely discovered before 1654 by Giovanni Battista Hodierna. In his work, he listed it as a “cloud-like nebulosity”. The description and area most closely match the Triangulum galaxy, so it is most likely M33 is what he was referring to. When the night is exceptionally clear, the Triangulum galaxy is the furthest object you can see with your naked eye, given you have 20/20 vision.`}
      />
    </div>
  );
};

export default M33Page;