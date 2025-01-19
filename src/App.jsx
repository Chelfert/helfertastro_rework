import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ModernAstroSite } from './components/ModernAstroSite';
import GalleryPage from './components/GalleryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ModernAstroSite />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;