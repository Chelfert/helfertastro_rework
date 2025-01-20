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

// Function to escape description quotes
const escapeDescription = (description) => {
  const escaped = description.replace(/"/g, '\\"').replace(/'/g, "\\'");
  return `\`${escaped}\``;
};

async function updateCarousel(targetData, urlName) {
    const modernAstroSitePath = join(__dirname, '..', 'src', 'components', 'ModernAstroSite.jsx');
    
    try {
      console.log('\nUpdating carousel...');
      
      // Verify file exists
      try {
        await fs.access(modernAstroSitePath);
        console.log('Found ModernAstroSite.jsx');
      } catch {
        throw new Error(`ModernAstroSite.jsx not found at: ${modernAstroSitePath}`);
      }
  
      // Create backup
      const backupPath = `${modernAstroSitePath}.backup`;
      await fs.copyFile(modernAstroSitePath, backupPath);
      console.log('Created backup file');
  
      let content = await fs.readFile(modernAstroSitePath, 'utf8');
      
      // Find slides array
      const slidesRegex = /const\s+slides\s*=\s*\[([\s\S]*?)\];/;
      const slidesMatch = content.match(slidesRegex);
      
      if (!slidesMatch) {
        throw new Error('Could not find slides array in ModernAstroSite.jsx');
      }
  
      console.log('Found slides array. Creating new slide...');
  
      // Create new slide with proper formatting
      const newSlide = `    {
        image: "/pictures/${urlName}.jpg",
        title: "${targetData.title}",
        link: "/targets/${urlName}"
      }`;
  
      // Parse existing slides
      let slidesContent = slidesMatch[1].trim();
      
      // Split slides while preserving closing braces
      let slides = slidesContent
        .split('{')
        .filter(s => s.trim())
        .map(s => '{' + s)
        .map(s => s.trim())
        .map(s => s.endsWith('}') ? s : s + '}');
      
      console.log('Current number of slides:', slides.length);
      
      // Add new slide and maintain 3 maximum
      slides.unshift(newSlide);
      slides = slides.slice(0, 3);
      
      console.log('New number of slides:', slides.length);
  
      // Join slides with proper formatting
      const newSlidesContent = slides.join(',\n');
      
      // Replace slides in content
      const newContent = content.replace(
        slidesRegex,
        `const slides = [\n${newSlidesContent}\n  ];`
      );
  
      // Verify changes were made
      if (newContent === content) {
        throw new Error('Failed to update slides array - content unchanged');
      }
  
      // Verify proper formatting
      if (!newContent.includes('};')) {
        throw new Error('Invalid slide format detected');
      }
  
      await fs.writeFile(modernAstroSitePath, newContent, 'utf8');
      console.log('Successfully updated carousel');
  
    } catch (error) {
      console.error('\nError updating carousel:', error.message);
      console.error('Please manually add this slide to the carousel in ModernAstroSite.jsx:');
      console.error(newSlide);
  
      // Restore from backup if it exists
      try {
        const backupPath = `${modernAstroSitePath}.backup`;
        await fs.access(backupPath);
        await fs.copyFile(backupPath, modernAstroSitePath);
        console.log('Restored from backup file');
      } catch (backupError) {
        console.error('Failed to restore from backup:', backupError.message);
      }
    }
  }

async function createTarget() {
  try {
    // Get target information
    const targetData = {
      title: await question('Title (e.g., "The Dumbbell Nebula"): '),
      acquisitionDate: await question('Acquisition Date (e.g., "August, 2024"): '),
      acquisitionScope: await question('Acquisition Scope (e.g., "AT115EDT"): '),
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

    // Component template with navigation
    const componentContent = `import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import TargetPage from './TargetPage';

const ${componentName} = () => {
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
        description=${escapeDescription(targetData.description)}
      />
    </div>
  );
};

export default ${componentName};`;

    // Create the file
    const filePath = join(__dirname, '..', 'src', 'components', 'targets', `${componentName}.jsx`);
    await fs.writeFile(filePath, componentContent);

    // Update the carousel
    await updateCarousel(targetData, urlName);

    // Output instructions
    console.log('\n=== File Created Successfully ===');
    console.log(`\nComponent created at: ${filePath}`);
    
    console.log('\n1. Add this route to App.jsx:');
    console.log(`<Route path="/targets/${urlName}" element={<${componentName} />} />`);

    console.log('\n2. Add this import to App.jsx:');
    console.log(`import ${componentName} from './components/targets/${componentName}';`);

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