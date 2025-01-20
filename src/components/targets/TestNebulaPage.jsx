import React from 'react';
import { Link } from 'react-router-dom';
import TargetPage from './TargetPage';

const TestnebulaPage = () => {
  return (
    <TargetPage 
      title="test nebula"
      mainImage="/pictures/test-nebula.jpg"
      locationImage="/Locations/test-nebula.jpg"
      acquisitionDate="oct 2025"
      acquisitionScope="at115edt"
      quickFacts={[
        "Catalog: m74",
        "Discovered: 2843, meee",
        "Distance from Earth: 140 light-years",
        "Diameter: 4 light-years",
        "Magnitude: 32",
        "Best Visible: fall"
      ]}
      description="this is a test\"
    />
  );
};

export default TestnebulaPage;