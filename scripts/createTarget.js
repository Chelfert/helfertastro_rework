// createTarget.js
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise(resolve => rl.question(query, resolve));

async function createTarget() {
  try {
    // Get target information
    const targetData = {
      title: await question('Title (e.g., "The Dumbbell Nebula"): '),
      acquisitionDate: await question('Acquisition Date (e.g., "August, 2024"): '),
      acquisitionScope: await question('Acquisition Scope (e.g., "AT115EDT"): '),
      // QuickFacts
      catalog: await question('Catalog (e.g., "Messier 27"): '),
      discovered: await question('Discovered (e.g., "1764, Charles Messier"): '),
      distance: await question('Distance from Earth (e.g., "1,360 light-years"): '),
      diameter: await question('Diameter (e.g., "2.5 Lightyears"): '),
      magnitude: await question('Magnitude (e.g., "7.5"): '),
      bestVisible: await question('Best Visible (e.g., "Summer"): '),
      description: await question('Description: '),
    };

    // Create URL-friendly name
    const urlName = targetData.title
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, '')
      .replace(/\s+/g, '-');

    // Create component name
    const componentName = targetData.title
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .replace(/\s+/g, '')
      .replace(/^[a-z]/, letter => letter.toUpperCase()) + 'Page';

    // Create target component file
    const componentContent = `import React from 'react';
import TargetPage from './TargetPage';

const ${componentName} = () => {
  return (
    <TargetPage 
      title="${targetData.title}"
      mainImage="/pictures/${urlName}.jpg"
      locationImage="/Locations/${urlName}.jpg"
      acquisitionDate="${targetData.acquisitionDate}"
      acquisitionScope="${targetData.acquisitionScope}"
      quickFacts={[
        "Catalog: ${targetData.catalog}",
        "Discovered: ${targetData.discovered}",
        "Distance from Earth: ${targetData.distance}",
        "Diameter: ${targetData.diameter}",
        "Magnitude: ${targetData.magnitude}",
        "Best Visible: ${targetData.bestVisible}"
      ]}
      description="${targetData.description}"
    />
  );
};

export default ${componentName};`;

    // Create the file
    const filePath = join(__dirname, '..', 'src', 'components', 'targets', `${componentName}.jsx`);
    await fs.writeFile(filePath, componentContent);

    // Output instructions
    console.log('\n=== File Created Successfully ===');
    console.log(`\nComponent created at: ${filePath}`);

    console.log('\n1. Add this import to App.jsx:');
    console.log(`import ${componentName} from './components/targets/${componentName}';`);

    console.log('\n2. Add this route to App.jsx:');
    console.log(`<Route path="/targets/${urlName}" element={<${componentName} />} />`);

    console.log('\n3. Add this to galleryItems array in GalleryPage.jsx:');
    console.log(`{
  image: "/pictures/${urlName}.jpg",
  title: "${targetData.title}",
  link: "/targets/${urlName}"
},`);

    console.log('\n4. Make sure these images exist:');
    console.log(`- /public/pictures/${urlName}.jpg`);
    console.log(`- /public/Locations/${urlName}.jpg`);

  } catch (error) {
    console.error('Error creating target:', error);
  } finally {
    rl.close();
  }
}

createTarget();