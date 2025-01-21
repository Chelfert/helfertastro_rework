import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ModernAstroSite from './components/ModernAstroSite';
import GalleryPage from './components/GalleryPage';

// Import all target pages
import M31Page from './components/targets/M31Page';
import M33Page from './components/targets/M33Page';
import M13Page from './components/targets/M13Page';
import VeilNebulaPage from './components/targets/VeilNebulaPage';
import OrionNebulaPage from './components/targets/OrionNebulaPage';
import PacmanNebulaPage from './components/targets/PacmanNebulaPage';
import HeartNebulaPage from './components/targets/HeartNebulaPage';
import SoulNebulaPage from './components/targets/SoulNebulaPage';
import EagleNebulaPage from './components/targets/EagleNebulaPage';
import PelicanNebulaPage from './components/targets/PelicanNebulaPage';
import CaliforniaNebulaPage from './components/targets/CaliforniaNebulaPage';
import HorseheadNebulaPage from './components/targets/HorseheadNebulaPage';
import IrisNebulaPage from './components/targets/IrisNebulaPage';
import JellyfishNebulaPage from './components/targets/JellyfishNebulaPage';
import LagoonTrifidPage from './components/targets/LagoonTrifidPage';
import RosetteNebulaPage from './components/targets/RosetteNebulaPage';
import CrescentNebulaPage from './components/targets/CrescentNebulaPage';
import Ic63Page from './components/targets/Ic63Page';
import Ic342Page from './components/targets/Ic342Page';
import Ngc7822Page from './components/targets/Ngc7822Page';
import BodesPage from './components/targets/BodesPage';
import LobsterClawBubblePage from './components/targets/LobsterClawBubblePage';
import CygnusWallPage from './components/targets/CygnusWallPage';
import LeoTripletPage from './components/targets/LeoTripletPage';
import WhirlpoolGalaxyPage from './components/targets/WhirlpoolGalaxyPage';
import PleiadesPage from './components/targets/PleiadesPage';
import PerseusClusterPage from './components/targets/PerseusClusterPage';
import FlamingStarPage from './components/targets/FlamingStarPage';
import ElephantsTrunkPage from './components/targets/ElephantsTrunkPage';
import LunarPage from './components/targets/LunarPage';
import TestNebulaPage from './components/targets/TestNebulaPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<ModernAstroSite />} />
        <Route path="/gallery" element={<GalleryPage />} />
        
        {/* Target pages */}
        <Route path="/m31" element={<M31Page />} />
        <Route path="/m33" element={<M33Page />} />
        <Route path="/m13" element={<M13Page />} />
        <Route path="/veilnebula" element={<VeilNebulaPage />} />
        <Route path="/orionnebula" element={<OrionNebulaPage />} />
        <Route path="/pacmannebula" element={<PacmanNebulaPage />} />
        <Route path="/heartnebula" element={<HeartNebulaPage />} />
        <Route path="/soulnebula" element={<SoulNebulaPage />} />
        <Route path="/eagle-nebula" element={<EagleNebulaPage />} />
        <Route path="/pelicannebula" element={<PelicanNebulaPage />} />
        <Route path="/californianebula" element={<CaliforniaNebulaPage />} />
        <Route path="/horseheadnebula" element={<HorseheadNebulaPage />} />
        <Route path="/irisnebula" element={<IrisNebulaPage />} />
        <Route path="/jellyfishnebula" element={<JellyfishNebulaPage />} />
        <Route path="/lagoontrifid" element={<LagoonTrifidPage />} />
        <Route path="/rosettenebula" element={<RosetteNebulaPage />} />
        <Route path="/crescentnebula" element={<CrescentNebulaPage />} />
        <Route path="/ic63" element={<Ic63Page />} />
        <Route path="/ic342" element={<Ic342Page />} />
        <Route path="/ngc7822" element={<Ngc7822Page />} />
        <Route path="/bodes" element={<BodesPage />} />
        <Route path="/lobsterclawbubble" element={<LobsterClawBubblePage />} />
        <Route path="/cygnuswall" element={<CygnusWallPage />} />
        <Route path="/leotriplet" element={<LeoTripletPage />} />
        <Route path="/whirlpoolgalaxy" element={<WhirlpoolGalaxyPage />} />
        <Route path="/pleiades" element={<PleiadesPage />} />
        <Route path="/perseuscluster" element={<PerseusClusterPage />} />
        <Route path="/flamingstar" element={<FlamingStarPage />} />
        <Route path="/elephantstrunk" element={<ElephantsTrunkPage />} />
        <Route path="/lunar" element={<LunarPage />} />
        <Route path="/test-nebula" element={<TestNebulaPage />} />

        {/* Catch-all route for 404s */}
        <Route path="*" element={
          <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
              <p className="mb-4">The page you're looking for doesn't exist.</p>
              <Link to="/" className="text-blue-400 hover:text-blue-300">
                Return Home
              </Link>
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;