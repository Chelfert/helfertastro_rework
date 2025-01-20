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

// Function to escape quotes in description
const escapeDescription = (description) => {
  // First, escape any existing quotes
  const escaped = description.replace(/"/g, '\\"').replace(/'/g, "\\'");
  // Then wrap in backticks for safety
  return `\`${escaped}\``;
};

async function updateCarousel(targetData, urlName) {
    const modernAstroSitePath = join(__dirname, '..', 'src', 'components', 'ModernAstroSite.jsx');
    
    try {
      // Check if file exists
      try {
        await fs.access(modernAstroSitePath);
      } catch {
        throw new Error(`ModernAstroSite.jsx not found at: ${modernAstroSitePath}`);
      }
  
      // Read the current file
      let content = await fs.readFile(modernAstroSitePath, 'utf8');
      
      // Validate file content
      if (!content.includes('const slides =')) {
        throw new Error('Could not find slides array in ModernAstroSite.jsx');
      }
      
      // Find the slides array with more precise regex
      const slidesRegex = /const\s+slides\s*=\s*\[\s*{[\s\S]*?}\s*\]\s*;/;
      const slidesMatch = content.match(slidesRegex);
      
      if (!slidesMatch) {
        throw new Error('Could not parse slides array structure');
      }
  
      try {
        // Extract and validate current slides
        const currentSlidesStr = slidesMatch[0].replace('const slides =', '').trim();
        // Validate JSON structure
        eval(`const testSlides = ${currentSlidesStr}`);
      } catch (e) {
        throw new Error(`Invalid slides array structure: ${e.message}`);
      }
  
      // Create new slide with proper formatting
      const newSlide = {
        image: `/pictures/${urlName}.jpg`,
        title: targetData.title,
        link: `/targets/${urlName}`
      };
  
      // Parse existing slides safely
      let slides = [];
      try {
        const slidesContent = slidesMatch[0]
          .replace('const slides =', '')
          .replace(/;$/, '')
          .trim();
        // Safely evaluate the slides array
        slides = eval(slidesContent);
      } catch (e) {
        throw new Error(`Failed to parse existing slides: ${e.message}`);
      }
  
      // Add new slide and maintain maximum of 3
      slides.unshift(newSlide);
      slides = slides.slice(0, 3);
  
      // Format slides array with consistent indentation
      const formattedSlides = `const slides = [
      ${slides.map(slide => `{
        image: "${slide.image}",
        title: "${slide.title}",
        link: "${slide.link}"
      }`).join(',\n    ')}
    ];`;
  
      // Create backup of original file
      const backupPath = `${modernAstroSitePath}.backup`;
      await fs.writeFile(backupPath, content);
  
      // Replace slides array in content
      const newContent = content.replace(slidesRegex, formattedSlides);
  
      // Validate new content
      if (!newContent.includes(newSlide.title)) {
        throw new Error('Failed to insert new slide correctly');
      }
  
      // Write changes
      await fs.writeFile(modernAstroSitePath, newContent, 'utf8');
  
      console.log('\n=== Carousel Update Successful ===');
      console.log('- Created backup at:', backupPath);
      console.log('- Added new target to carousel');
      console.log('- Maintained maximum of 3 slides');
      console.log('- Validated content structure');
  
    } catch (error) {
      console.error('\n⚠️ Error updating carousel:');
      console.error(error.message);
      console.error('\nPlease manually add this slide to ModernAstroSite.jsx:');
      console.error(`{
    image: "/pictures/${urlName}.jpg",
    title: "${targetData.title}",
    link: "/targets/${urlName}"
  }`);
      
      // If there was a backup, restore it
      try {
        const backupPath = `${modernAstroSitePath}.backup`;
        const backupExists = await fs.access(backupPath).then(() => true).catch(() => false);
        if (backupExists) {
          await fs.copyFile(backupPath, modernAstroSitePath);
          console.error('\nRestored file from backup.');
        }
      } catch (backupError) {
        console.error('\nFailed to restore from backup:', backupError.message);
      }
    }
  }

async function createTarget() {
  try {
    // Get target information (same as before)
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

    const urlName = targetData.title
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, '')
      .replace(/\s+/g, '-');

    const componentName = targetData.title
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .replace(/\s+/g, '')
      .replace(/^[a-z]/, letter => letter.toUpperCase()) + 'Page';

    // Updated component template with proper navigation
    const componentContent = `import React from 'react';
import { Link } from 'react-router-dom';
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
      description=${escapeDescription(targetData.description)}
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

    console.log('\n5. Add this to netlify.toml if not already present:');
    console.log(`
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
`);

  } catch (error) {
    console.error('Error creating target:', error);
  } finally {
    rl.close();
  }
}

createTarget();