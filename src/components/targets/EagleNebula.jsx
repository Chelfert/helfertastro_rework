import React from 'react';
import TargetPage from './TargetPage';

const EagleNebulaPage = () => {
  return (
    <TargetPage 
      title="The Eagle Nebula"
      // Primary image section
      images={[
        {
          title: "The Pillars of Creation, Eagle Nebula",
          image: "/pictures/PillarsCreation.jpg",
          acquisitionDate: "May, 2024",
          acquisitionScope: "AT115EDT",
          downloadText: "Download Pillars of Creation"
        },
        {
          title: "The Eagle Nebula",
          image: "/pictures/EagleNebulaFinal.png",
          acquisitionDate: "July, 2022",
          acquisitionScope: "Redcat",
          downloadText: "Download Eagle Nebula"
        }
      ]}
      locationImage="/Locations/EagleNebula.png"
      quickFacts={[
        "Catalog: Messier 16",
        "Discovered: 1745, Jean-Phillipe de Cheseaux",
        "Distance from Earth: 7,000 Lightyears",
        "Diameter: 70 Lightyears",
        "Magnitude: 6.4",
        "Best Visible: Summer"
      ]}
      description="The Eagle's nebula is an active star forming region in the Serpens constellation. This nebula spans 70 x 50 Lightyears and is about 5.5 Million years old. Inside a nebula like this, gravity pulls gas inwards towards the center and if enough is present, nuclear fusion ignites and the compacted cloud becomes a new star. The Eagle nebula is also home to the famous Pillars of Creation."
    />
  );
};

export default EagleNebulaPage;