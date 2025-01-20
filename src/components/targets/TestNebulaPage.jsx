import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import TargetPage from './TargetPage';

const TestnebulaPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <header style={{ maxHeight: "150px" }}>
        <nav>
          <ul className="navbar" style={{ paddingLeft: "0%", margin: "auto", justifyContent: "space-around" }}>    
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/localConditions.html">Local Conditions</Link></li>
            <li><Link to="/equipment.html">Equipment</Link></li>
          </ul>
        </nav>
      </header>

      <TargetPage 
        title="test nebula"
        mainImage="/pictures/test-nebula.jpg"
        locationImage="/Locations/test-nebula.jpg"
        acquisitionDate="rew"
        acquisitionScope="rew"
        quickFacts={[
          "Catalog: rew",
          "Discovered: rew",
          "Distance from Earth: re",
          "Diameter: wrew",
          "Magnitude: rew",
          "Best Visible: fds"
        ]}
        description={"no quotexz bnrudda"}
      />
    </div>
  );
};

export default TestnebulaPage;