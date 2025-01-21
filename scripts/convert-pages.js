const fs = require('fs').promises;
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

async function convertHtmlToReact() {
  try {
    // Update directories to match your structure
    const htmlDir = './public/TargetPages';
    const outputDir = './src/components/targets';

    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });

    // Get all HTML files
    const files = await fs.readdir(htmlDir);
    const htmlFiles = files.filter(file => file.endsWith('.html'));

    for (const htmlFile of htmlFiles) {
      console.log(`Processing ${htmlFile}...`);
      const filePath = path.join(htmlDir, htmlFile);
      const html = await fs.readFile(filePath, 'utf8');
      const dom = new JSDOM(html);
      const document = dom.window.document;

      // Generate route path
      const routePath = '/' + path.basename(htmlFile, '.html').toLowerCase();

      // Extract necessary information
      const title = document.querySelector('h1')?.textContent || 
                   document.querySelector('title')?.textContent || 
                   'Unknown Target';
      
      // Find and process the main image
      let mainImage = '';
      const imgElements = document.querySelectorAll('img');
      for (const img of imgElements) {
        const src = img.getAttribute('src');
        if (src && !src.includes('logo') && !src.includes('location')) {
          mainImage = src;
          break;
        }
      }

      // Find location image (if it exists)
      const locationImage = Array.from(document.querySelectorAll('img'))
        .find(img => img.src.toLowerCase().includes('location'))?.src || '';

      // Extract acquisition info
      const acquisitionText = Array.from(document.querySelectorAll('p'))
        .find(p => p.textContent.includes('Acquisition'))?.textContent || '';
      
      // Extract quick facts and description
      const quickFacts = [];
      const descriptionParts = [];
      
      // Process paragraphs to identify quick facts and description content
      document.querySelectorAll('p').forEach(p => {
        const text = p.textContent.trim();
        if (text && !text.includes('Acquisition')) {
          if (text.includes(':') && text.length < 100) {
            quickFacts.push(text);
          } else {
            descriptionParts.push(text);
          }
        }
      });

      // Create React component name
      const componentName = path.basename(htmlFile, '.html')
        .split(/[-_]/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('') + 'Page';

      // Generate React component
      const reactComponent = `import React from 'react';
import Navigation from '../Navigation';
import TargetPage from '../TargetPage';

const ${componentName} = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <TargetPage
        title={\`${title.replace(/`/g, '\\`')}\`}
        mainImage={\`${mainImage.replace(/`/g, '\\`')}\`}
        locationImage={\`${locationImage.replace(/`/g, '\\`')}\`}
        acquisitionDate={\`${acquisitionText.replace(/`/g, '\\`')}\`}
        quickFacts={${JSON.stringify(quickFacts, null, 2)}}
        description={\`${descriptionParts.join('\\n\\n').replace(/`/g, '\\`')}\`}
      />
    </div>
  );
};

export default ${componentName};`;

      // Write React component to file
      const outputFile = path.join(outputDir, `${componentName}.jsx`);
      await fs.writeFile(outputFile, reactComponent);
      console.log(`Created ${componentName}.jsx`);

      // Generate route information for this component
      return {
        path: routePath,
        componentName,
        originalFile: htmlFile
      };
    }

    // After processing all files, generate routes file
    const routesContent = `import React from 'react';
import { Route } from 'react-router-dom';
${routes.map(r => `import { ${r.componentName} } from './components/targets/${r.componentName}';`).join('\n')}

export const targetRoutes = [
  ${routes.map(r => `{
    path: '${r.path}',
    element: <${r.componentName} />,
    originalFile: '${r.originalFile}'
  }`).join(',\n  ')}
];`;

    await fs.writeFile('./src/targetRoutes.js', routesContent);
    console.log('Generated targetRoutes.js');

  } catch (error) {
    console.error('Error converting files:', error);
  }
}

convertHtmlToReact().then(() => {
  console.log('Conversion complete!');
}).catch(err => {
  console.error('Failed to convert pages:', err);
});