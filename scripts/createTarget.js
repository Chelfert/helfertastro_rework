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
  
      let content = await fs.readFile(modernAstroSitePath, 'utf8');
      
      // Find slides array with more precise regex
      const slidesRegex = /const\s+slides\s*=\s*\[([\s\S]*?)\];/;
      const slidesMatch = content.match(slidesRegex);
      
      if (!slidesMatch) {
        throw new Error('Could not find slides array in ModernAstroSite.jsx');
      }
  
      // Create new slide with consistent formatting
      const newSlide = {
        image: `/pictures/${urlName}.jpg`,
        title: targetData.title,
        link: `/targets/${urlName}`
      };
  
      // Get existing slides and clean them up
      const slidesString = slidesMatch[1];
      let slides = [];
      
      try {
        // Extract all slide objects using regex
        const slideObjectRegex = /{[^{}]*}/g;
        const slideMatches = slidesString.match(slideObjectRegex) || [];
        
        // Parse each slide object
        slides = slideMatches.map(slide => {
          const cleanSlide = slide
            .replace(/,\s*}/g, '}')  // Remove trailing commas
            .replace(/}+/g, '}');    // Remove multiple closing braces
          return JSON.parse(cleanSlide.replace(/'/g, '"')); // Convert to proper JSON
        });
      } catch (e) {
        console.log('Error parsing existing slides, starting fresh');
        slides = [];
      }
  
      // Add new slide and keep only first 3
      slides.unshift(newSlide);
      slides = slides.slice(0, 3);
  
      // Format slides array with consistent indentation
      const formattedSlides = slides
        .map(slide => `    {
        image: "${slide.image}",
        title: "${slide.title}",
        link: "${slide.link}"
      }`)
        .join(',\n');
  
      // Replace old slides array with new one
      const newContent = content.replace(
        slidesRegex,
        `const slides = [\n${formattedSlides}\n  ];`
      );
  
      // Write the changes
      await fs.writeFile(modernAstroSitePath, newContent, 'utf8');
      console.log('Successfully updated carousel');
  
    } catch (error) {
      console.error('\nError updating carousel:', error.message);
      console.error('Please manually add this slide to the carousel in ModernAstroSite.jsx:');
      console.error(`{
        image: "/pictures/${urlName}.jpg",
        title: "${targetData.title}",
        link: "/targets/${urlName}"
      }`);
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
// In the createTarget function, update how we generate the component content:

const componentContent = `import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import TargetPage from './TargetPage';

const ${componentName} = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <img 
                  src="/Clayton_AstroPhotoLogo/Helfert_AstroLogoWhite.png" 
                  alt="Helfert Astrophotography"
                  className="h-8"
                />
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:text-blue-400 transition-colors">Home</Link>
              <Link to="/gallery" className="text-white hover:text-blue-400 transition-colors">Gallery</Link>
              <Link to="/local-conditions" className="text-white hover:text-blue-400 transition-colors">Local Conditions</Link>
              <Link to="/equipment" className="text-white hover:text-blue-400 transition-colors">Equipment</Link>
            </div>
          </div>

          {/* Mobile menu panel */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90">
                <Link to="/" className="block text-white px-3 py-2 hover:bg-gray-800 rounded-md">Home</Link>
                <Link to="/gallery" className="block text-white px-3 py-2 hover:bg-gray-800 rounded-md">Gallery</Link>
                <Link to="/local-conditions" className="block text-white px-3 py-2 hover:bg-gray-800 rounded-md">Local Conditions</Link>
                <Link to="/equipment" className="block text-white px-3 py-2 hover:bg-gray-800 rounded-md">Equipment</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

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
        description={"${targetData.description.replace(/"/g, '\\"')}"}
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