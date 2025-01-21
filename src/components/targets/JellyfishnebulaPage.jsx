import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const JellyfishnebulaPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={`Helfert Astrophotography`}
        mainImage={`/pictures/jellyfishNebula.jpg`}
        locationImage={`/Locations/JellyfishNebula.png`}
        acquisitionDate={`
            Acquisition: AT115EDT. February, 2024
            
                
                Download Jellyfish Nebula
            
        `}
        quickFacts={[]}
        description={`The Jellyfish Nebula is a supernova remnant from an explosion that happened around 30,000 - 35,000 years ago. This explosion very likely gave birth to the neutron star and Pulsar CXOU J061705.3+222127, which can be seen by the arrow in the second picture. A Pulsar is created when a star goes supernova and all of the outer layers are blown away. The iron core of a massive star (much larger than our sun)
                 remains and is then crushed down to a size around 12 or less miles.
                 This creates gravity so strong that it crushes protons and electrons together, leaving the remaining mass to be comprised of roughly 95% neutrons. 
                 This makes the material EXTREMELY heavy. So heavy, that a single teaspoon of neutron star material would weigh roughly 4 billion tons. 
                 After the explosion, the neutrons at the stars surface then decay into protons and electrons. As they are released from the surface, they enter the star's intense magnetic field and rotate along with it. These protons and Electrons accelerate to near the speed of light, and give off electromagnetic radiation which is released via beams from the pulsars magnetic poles.
                 The magnetic poles do not match the rotational poles, so the rotation of the pulsar actually swings the radiation beams around. As the beams are swept past Earth's trajectory, they can be recorded in regular steady intervals, or pulses which is how the name Pulsar was created. 
                 Pulsars spin insanely fast, with the slowest pulsar rotation being recorded at 11.8 seconds, while the quickest ever recorded completes a full rotation every 1.396 millisends, or 716 times per second.`}
      />
    </div>
  );
};

export default JellyfishnebulaPage;