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

async function updateNetlifyConfig() {
 const netlifyConfigPath = join(__dirname, '..', 'netlify.toml');
 const netlifyContent = `[build]
 command = "npm install && npm run build"
 publish = "dist"

[build.environment]
 NODE_VERSION = "18"
 NPM_VERSION = "10"

[[redirects]]
 from = "/*"
 to = "/index.html"
 status = 200
 force = true

[[headers]]
 for = "/*"
   [headers.values]
   Cache-Control = "public, max-age=0, must-revalidate"

[[headers]]
 for = "/*.css"
   [headers.values]
   Cache-Control = "public, max-age=31536000, immutable"
`;

 await fs.writeFile(netlifyConfigPath, netlifyContent);
}

async function updateCarousel(targetData, urlName) {
 const modernAstroSitePath = join(__dirname, '..', 'src', 'components', 'ModernAstroSite.jsx');
 
 try {
   let content = await fs.readFile(modernAstroSitePath, 'utf8');
   const slidesRegex = /const\s+slides\s*=\s*\[([\s\S]*?)\];/;
   const slidesMatch = content.match(slidesRegex);
   
   if (!slidesMatch) {
     throw new Error('Could not find slides array in ModernAstroSite.jsx');
   }

   const newSlide = {
     image: `/pictures/${urlName}.jpg`,
     title: targetData.title,
     link: `/targets/${urlName}`
   };

   let currentSlides = [];
   try {
     const slideRegex = /{[^{}]*}/g;
     const matches = slidesMatch[1].match(slideRegex) || [];
     currentSlides = matches.map(slide => {
       const cleaned = slide
         .replace(/,\s*}/g, '}')
         .replace(/}+/g, '}')
         .replace(/'/g, '"');
       return JSON.parse(cleaned);
     });
   } catch (e) {
     console.log('Error parsing existing slides:', e);
     currentSlides = [];
   }

   currentSlides.unshift(newSlide);
   currentSlides = currentSlides.slice(0, 3);

   const newContent = `import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

const ModernAstroSite = () => {
 const [currentSlide, setCurrentSlide] = useState(0);
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const slides = [
   ${currentSlides.map(slide => `{
     image: "${slide.image}",
     title: "${slide.title}",
     link: "${slide.link}"
   }`).join(',\n    ')}
 ];

 const nextSlide = (e) => {
   e.preventDefault();
   setCurrentSlide((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
 };

 const prevSlide = (e) => {
   e.preventDefault();
   setCurrentSlide((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
 };

 return (
   <div className="min-h-screen bg-gray-900 text-white">
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
           
           <div className="md:hidden">
             <button 
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className="text-white p-2"
             >
               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
           </div>

           <div className="hidden md:flex space-x-8">
             <Link to="/" className="text-white hover:text-blue-400 transition-colors">Home</Link>
             <Link to="/gallery" className="text-white hover:text-blue-400 transition-colors">Gallery</Link>
             <Link to="/local-conditions" className="text-white hover:text-blue-400 transition-colors">Local Conditions</Link>
             <Link to="/equipment" className="text-white hover:text-blue-400 transition-colors">Equipment</Link>
           </div>
         </div>

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

     <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
       <div className="absolute top-0 w-full h-full bg-center bg-cover" 
            style={{backgroundImage: 'url("/jpgPictures/M31-130pds.jpg")', backgroundPosition: 'center'}}>
         <div className="absolute bg-black opacity-75 inset-0"></div>
       </div>
       <div className="container relative mx-auto">
         <div className="items-center flex flex-wrap">
           <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
             <div className="pr-12">
               <h1 className="text-5xl font-bold mb-6">Explore the Universe</h1>
               <p className="mt-4 text-lg">
                 The purpose of this website is to share my love of the Universe with as many people as I can. 
                 Every picture was taken from Madison, Alabama which is rated 6 on the Bortle scale.
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>

     <div className="relative max-w-6xl mx-auto px-4 py-16">
       <h2 className="text-3xl font-bold text-center mb-8">Recent Captures</h2>
       <div className="relative aspect-video overflow-hidden rounded-lg">
         <Link to={slides[currentSlide].link} className="block">
           <img 
             src={slides[currentSlide].image}
             alt={slides[currentSlide].title}
             className="w-full h-full object-cover"
           />
           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
             <h3 className="text-xl font-semibold text-center text-white">
               {slides[currentSlide].title}
             </h3>
           </div>
         </Link>
         <button 
           onClick={prevSlide}
           className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/75 transition-colors z-10"
         >
           <ChevronLeft className="text-white" size={24} />
         </button>
         <button 
           onClick={nextSlide}
           className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/75 transition-colors z-10"
         >
           <ChevronRight className="text-white" size={24} />
         </button>
       </div>
     </div>
   </div>
 );
};

export default ModernAstroSite;`;

   await fs.writeFile(modernAstroSitePath, newContent);
   console.log('Successfully updated ModernAstroSite.jsx');

 } catch (error) {
   console.error('\nError updating carousel:', error.message);
 }
}

async function createTarget() {
 try {
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

   const componentContent = `import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import TargetPage from './TargetPage';

const ${componentName} = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 return (
   <div className="min-h-screen bg-gray-900 text-white">
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
           
           <div className="md:hidden">
             <button 
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className="text-white p-2"
             >
               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
           </div>

           <div className="hidden md:flex space-x-8">
             <Link to="/" className="text-white hover:text-blue-400 transition-colors">Home</Link>
             <Link to="/gallery" className="text-white hover:text-blue-400 transition-colors">Gallery</Link>
             <Link to="/local-conditions" className="text-white hover:text-blue-400 transition-colors">Local Conditions</Link>
             <Link to="/equipment" className="text-white hover:text-blue-400 transition-colors">Equipment</Link>
           </div>
         </div>

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

   const filePath = join(__dirname, '..', 'src', 'components', 'targets', `${componentName}.jsx`);
   await fs.writeFile(filePath, componentContent);

   await updateCarousel(targetData, urlName);
   await updateNetlifyConfig();

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