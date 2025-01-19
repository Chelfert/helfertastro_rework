import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ModernAstroSite from './components/ModernAstroSite';
import GalleryPage from './components/GalleryPage';
import DumbbellNebulaPage from './components/targets/DumbbellNebula.jsx';
import EagleNebulaPage from './components/targets/EagleNebula.jsx';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({error}) {
  return (
    <div className="text-white p-4">
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<ModernAstroSite />} />
  <Route path="/gallery" element={<GalleryPage />} />
  <Route 
    path="/targets/dumbbell-nebula" 
    element={
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <DumbbellNebulaPage />
      </ErrorBoundary>
    } 
  />
</Routes>
    </BrowserRouter>
  );
}

export default App;