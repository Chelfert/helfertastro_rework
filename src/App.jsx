import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModernAstroSite } from './components/ModernAstroSite';
import GalleryPage from './components/GalleryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModernAstroSite />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;