import React from 'react';
import TargetPage from './TargetPage';

const TestNebulaPage = () => {
  return (
    <TargetPage 
      title="Test Nebula"
      mainImage="/pictures/test-nebula.jpg"
      locationImage="/Locations/test-nebula.jpg"
      acquisitionDate="October, 2025"
      acquisitionScope="AT115EDT"
      quickFacts={[
        "Catalog: Messier 83",
        "Discovered: 1833, Charlie Dickens",
        "Distance from Earth: 1,500 light-years",
        "Diameter: 43 light-years",
        "Magnitude: 23",
        "Best Visible: Fall"
      ]}
      description="The Eagle's nebula is an active star forming region in the Serpens constellation. This nebula spans 70 x 50 Lightyears and is about 5.5 Million years old. Inside a nebula like this, gravity pulls gas inwards towards the center and if enough is present, nuclear fusion ignites and the compacted cloud becomes a new star. The Eagle nebula is also home to the famous Pillars of Creation.""
    />
  );
};

export default TestNebulaPage;