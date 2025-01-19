// DumbbellNebula.jsx
import React from 'react';
import TargetPage from './TargetPage.jsx';

const DumbbellNebulaPage = () => {
  return (
    <TargetPage 
      title="The Dumbbell Nebula"
      images={[{  // Change to match TargetPage's expected props
        title: "The Dumbbell Nebula",
        image: "/pictures/DumbbellNebula.jpg",
        acquisitionDate: "August, 2024",
        acquisitionScope: "AT115EDT",
        downloadText: "Download Dumbbell Nebula"
      }]}
      locationImage="/Locations/DumbbellNebula.jpg"
      quickFacts={[
        "Catalog: Messier 27",
        "Discovered: 1764, Charles Messier",
        "Distance from Earth: 1,360 light-years",
        "Diameter: 2.5 Lightyears",
        "Magnitude: 7.5",
        "Best Visible: Summer"
      ]}
      description="The Dumbbell Nebula, also known as Messier 27 (M27) or NGC 6853, is a planetary nebula located approximately 1,360 light-years away in the constellation Vulpecula. This nebula, with its distinctive dumbbell shape, can be best observed during the summer months. The Dumbbell Nebula spans about 2.5 light-years in diameter and is a popular target for amateur astronomers due to its brightness and size. The nebula is formed from ionized gases ejected by a dying red giant star, and its central region is illuminated by a hot white dwarf. This makes it an excellent subject for those using narrowband filters to capture its intricate details. The central white dwarf, larger than most known white dwarfs, was discovered well before the surrounding nebula was fully understood."
    />
  );
};

export default DumbbellNebulaPage;