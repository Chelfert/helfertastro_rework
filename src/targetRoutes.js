import React from 'react';
import { Route } from 'react-router-dom';
import { BodesPage } from './components/targets/BodesPage';
import { CalifornianebulaPage } from './components/targets/CalifornianebulaPage';
import { CrescentnebulaPage } from './components/targets/CrescentnebulaPage';
import { CygnuswallPage } from './components/targets/CygnuswallPage';
import { DumbbellnebulaPage } from './components/targets/DumbbellnebulaPage';
import { EaglenebulaPage } from './components/targets/EaglenebulaPage';
import { EclipsephasesPage } from './components/targets/EclipsephasesPage';
import { ElephantstrunkPage } from './components/targets/ElephantstrunkPage';
import { FlamingstarPage } from './components/targets/FlamingstarPage';
import { HeartnebulaPage } from './components/targets/HeartnebulaPage';
import { HorseheadnebulaPage } from './components/targets/HorseheadnebulaPage';
import { Ic342Page } from './components/targets/Ic342Page';
import { Ic63Page } from './components/targets/Ic63Page';
import { IrisnebulaPage } from './components/targets/IrisnebulaPage';
import { JellyfishnebulaPage } from './components/targets/JellyfishnebulaPage';
import { LagoontrifidPage } from './components/targets/LagoontrifidPage';
import { LeotripletPage } from './components/targets/LeotripletPage';
import { LobsterclawbubblePage } from './components/targets/LobsterclawbubblePage';
import { LunarPage } from './components/targets/LunarPage';
import { LunareclipsePage } from './components/targets/LunareclipsePage';
import { M13Page } from './components/targets/M13Page';
import { M31Page } from './components/targets/M31Page';
import { M33Page } from './components/targets/M33Page';
import { Ngc7822Page } from './components/targets/Ngc7822Page';
import { NorthamericanandpelicanPage } from './components/targets/NorthamericanandpelicanPage';
import { OrionnebulaPage } from './components/targets/OrionnebulaPage';
import { PacmannebulaPage } from './components/targets/PacmannebulaPage';
import { PelicannebulaPage } from './components/targets/PelicannebulaPage';
import { PerseusclusterPage } from './components/targets/PerseusclusterPage';
import { PleiadesPage } from './components/targets/PleiadesPage';
import { RosettenebulaPage } from './components/targets/RosettenebulaPage';
import { SoulnebulaPage } from './components/targets/SoulnebulaPage';
import { TemplatePage } from './components/targets/TemplatePage';
import { VeilnebulaPage } from './components/targets/VeilnebulaPage';
import { WhirlpoolgalaxyPage } from './components/targets/WhirlpoolgalaxyPage';

export const targetRoutes = [
  {
    path: '/bodes',
    element: <BodesPage />,
    originalFile: 'Bodes.html'
  },
  {
    path: '/californianebula',
    element: <CalifornianebulaPage />,
    originalFile: 'CaliforniaNebula.html'
  },
  {
    path: '/crescentnebula',
    element: <CrescentnebulaPage />,
    originalFile: 'CrescentNebula.html'
  },
  {
    path: '/cygnuswall',
    element: <CygnuswallPage />,
    originalFile: 'CygnusWall.html'
  },
  {
    path: '/dumbbellnebula',
    element: <DumbbellnebulaPage />,
    originalFile: 'DumbbellNebula.html'
  },
  {
    path: '/eaglenebula',
    element: <EaglenebulaPage />,
    originalFile: 'EagleNebula.html'
  },
  {
    path: '/eclipsephases',
    element: <EclipsephasesPage />,
    originalFile: 'Eclipsephases.html'
  },
  {
    path: '/elephantstrunk',
    element: <ElephantstrunkPage />,
    originalFile: 'ElephantsTrunk.html'
  },
  {
    path: '/flamingstar',
    element: <FlamingstarPage />,
    originalFile: 'FlamingStar.html'
  },
  {
    path: '/heartnebula',
    element: <HeartnebulaPage />,
    originalFile: 'HeartNebula.html'
  },
  {
    path: '/horseheadnebula',
    element: <HorseheadnebulaPage />,
    originalFile: 'HorseheadNebula.html'
  },
  {
    path: '/ic342',
    element: <Ic342Page />,
    originalFile: 'IC342.html'
  },
  {
    path: '/ic63',
    element: <Ic63Page />,
    originalFile: 'IC63.html'
  },
  {
    path: '/irisnebula',
    element: <IrisnebulaPage />,
    originalFile: 'IrisNebula.html'
  },
  {
    path: '/jellyfishnebula',
    element: <JellyfishnebulaPage />,
    originalFile: 'JellyfishNebula.html'
  },
  {
    path: '/lagoontrifid',
    element: <LagoontrifidPage />,
    originalFile: 'LagoonTrifid.html'
  },
  {
    path: '/leotriplet',
    element: <LeotripletPage />,
    originalFile: 'LeoTriplet.html'
  },
  {
    path: '/lobsterclawbubble',
    element: <LobsterclawbubblePage />,
    originalFile: 'LobsterClawbubble.html'
  },
  {
    path: '/lunar',
    element: <LunarPage />,
    originalFile: 'Lunar.html'
  },
  {
    path: '/lunareclipse',
    element: <LunareclipsePage />,
    originalFile: 'LunarEclipse.html'
  },
  {
    path: '/m13',
    element: <M13Page />,
    originalFile: 'M13.html'
  },
  {
    path: '/m31',
    element: <M31Page />,
    originalFile: 'M31.html'
  },
  {
    path: '/m33',
    element: <M33Page />,
    originalFile: 'M33.html'
  },
  {
    path: '/ngc7822',
    element: <Ngc7822Page />,
    originalFile: 'NGC7822.html'
  },
  {
    path: '/northamericanandpelican',
    element: <NorthamericanandpelicanPage />,
    originalFile: 'NorthAmericanAndPelican.html'
  },
  {
    path: '/orionnebula',
    element: <OrionnebulaPage />,
    originalFile: 'OrionNebula.html'
  },
  {
    path: '/pacmannebula',
    element: <PacmannebulaPage />,
    originalFile: 'PacmanNebula.html'
  },
  {
    path: '/pelicannebula',
    element: <PelicannebulaPage />,
    originalFile: 'PelicanNebula.html'
  },
  {
    path: '/perseuscluster',
    element: <PerseusclusterPage />,
    originalFile: 'PerseusCluster.html'
  },
  {
    path: '/pleiades',
    element: <PleiadesPage />,
    originalFile: 'Pleiades.html'
  },
  {
    path: '/rosettenebula',
    element: <RosettenebulaPage />,
    originalFile: 'RosetteNebula.html'
  },
  {
    path: '/soulnebula',
    element: <SoulnebulaPage />,
    originalFile: 'SoulNebula.html'
  },
  {
    path: '/template',
    element: <TemplatePage />,
    originalFile: 'Template.html'
  },
  {
    path: '/veilnebula',
    element: <VeilnebulaPage />,
    originalFile: 'VeilNebula.html'
  },
  {
    path: '/whirlpoolgalaxy',
    element: <WhirlpoolgalaxyPage />,
    originalFile: 'WhirlpoolGalaxy.html'
  }
];