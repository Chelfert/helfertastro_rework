import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const BodesPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/Bodesandcigar.jpg`}
        locationImage={`/Locations/bodesgalaxy.png`}
        acquisitionDate={`
            Acquisition: AT115EDT. March, 2024
            
                
                Download Bode's Galaxy
            
        `}
        quickFacts={[]}
        description={`Bode's Galaxy is a grand design spiral galaxy located in our galaxtic neighborhood at around 11.7 million light-years away. This galaxy is home to a supermassive black hole so large it is estimated to be around 70 million solar masses.
                This galaxy is the most remote blueshifted large galaxy, which means it is actually moving towards us. Bode's Galaxy is home to around 250 billion stars, which is over twice as many than are in our own Milky Way.
                The Cigar Galaxy, also known as The Starburst Galaxy is home to some really unique objects such as a Pulsar and Magnetar star. A magnetar star is a neutron star with an
                extremely strong magnetic field. Compared to Earth, a magnetar's magnetic field is about 100 Million times stronger. Magnetars are extremely rare, and roughly only 30 have been discovered so far.
                M82 was also recently home to a supernova explosion in 2014. The brightest pulsar star was also discovered inside the Cigar Galaxy. Though small, this galaxy is extremely luminous
                at about 5 times brighter than our own Milky Way, making it one of the most observed galaxies.`}
      />
    </div>
  );
};

export default BodesPage;