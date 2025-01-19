import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ModernAstroSite from './components/ModernAstroSite';
import GalleryPage from './components/GalleryPage';
import DumbbellNebulaPage from './components/targets/DumbbellNebula';
import EagleNebulaPage from './components/targets/EagleNebula';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ModernAstroSite />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/targets/dumbbell-nebula" element={<DumbbellNebulaPage />} />
        <Route path="/targets/eagle-nebula" element={<EagleNebulaPage />} />
        {/* Add more routes for other target pages */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;