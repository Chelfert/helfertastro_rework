const fs = require('fs').promises;
const path = require('path');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise(resolve => readline.question(query, resolve));

async function createTarget() {
  try {
    // Get target information
    const targetData = {
      name: await question('Target Name (e.g., "Dumbbell Nebula"): '),
      urlName: await question('URL Name (e.g., "dumbbell-nebula"): '),
      catalog: await question('Catalog Number (e.g., "Messier 27"): '),
      discovered: await question('Discovery (e.g., "1764, Charles Messier"): '),
      distance: await question('Distance (e.g., "1,360 light-years"): '),
      diameter: await question('Diameter (e.g., "2.5 Lightyears"): '),
      magnitude: await question('Magnitude (e.g., "7.5"): '),
      season: await question('Best Visible Season: '),
      description: await question('Description: '),
      mainImage: await question('Main Image Filename (e.g., "DumbbellNebula.jpg"): '),
      locationImage: await question('Location Image Filename (e.g., "DumbbellNebula.jpg"): '),
      acquisitionDate: await question('Acquisition Date (e.g., "August, 2024"): '),
      acquisitionScope: await question('Acquisition Scope (e.g., "AT115EDT"): '),
    };

    // Create target component file
    const componentContent = `import React from 'react';
import TargetPage from './TargetPage';

const ${targetData.name.replace(/\s+/g, '')}Page = () => {
  return (
    <TargetPage 
      title="${targetData.name}"
      images={[{
        title: "${targetData.name}",
        image: "/pictures/${targetData.mainImage}",
        acquisitionDate: "${targetData.acquisitionDate}",
        acquisitionScope: "${targetData.acquisitionScope}",
        downloadText: "Download ${targetData.name}"
      }]}
      locationImage="/Locations/${targetData.locationImage}"
      quickFacts={[
        "Catalog: ${targetData.catalog}",
        "Discovered: ${targetData.discovered}",
        "Distance from Earth: ${targetData.distance}",
        "Diameter: ${targetData.diameter}",
        "Magnitude: ${targetData.magnitude}",
        "Best Visible: ${targetData.season}"
      ]}
      description="${targetData.description}"
    />
  );
};

export default ${targetData.name.replace(/\s+/g, '')}Page;`;

    // Write component file
    await fs.writeFile(
      path.join(__dirname, '..', 'src', 'components', 'targets', `${targetData.name.replace(/\s+/g, '')}.jsx`),
      componentContent
    );

    // Create gallery item
    const galleryItem = `    {
      image: "/pictures/${targetData.mainImage}",
      title: "${targetData.name}",
      link: "/targets/${targetData.urlName}"
    },`;

    console.log('\nAdd this route to App.jsx:');
    console.log(`<Route path="/targets/${targetData.urlName}" element={<${targetData.name.replace(/\s+/g, '')}Page />} />`);

    console.log('\nAdd this import to App.jsx:');
    console.log(`import ${targetData.name.replace(/\s+/g, '')}Page from './components/targets/${targetData.name.replace(/\s+/g, '')}.jsx';`);

    console.log('\nAdd this to galleryItems array in GalleryPage.jsx:');
    console.log(galleryItem);

    console.log('\nDone! New target component created successfully.');
  } catch (error) {
    console.error('Error creating target:', error);
  } finally {
    readline.close();
  }
}

createTarget();