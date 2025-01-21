import React from 'react';
import { Route } from 'react-router-dom';
import { BodesPage } from './components/targets/BodesPage';
import { CaliforniaNebulaPage } from './components/targets/CaliforniaNebulaPage';
import { CrescentNebulaPage } from './components/targets/CrescentNebulaPage';
import { CygnusWallPage } from './components/targets/CygnusWallPage';
import { DumbbellNebulaPage } from './components/targets/DumbbellNebulaPage';
import { EagleNebulaPage } from './components/targets/EagleNebulaPage';
import { EclipsePhasesPage } from './components/targets/EclipsePhasesPage';
import { ElephantsTrunkPage } from './components/targets/ElephantsTrunkPage';
import { FlamingStarPage } from './components/targets/FlamingStarPage';
import { HeartNebulaPage } from './components/targets/HeartNebulaPage';
import { HorseheadNebulaPage } from './components/targets/HorseheadNebulaPage';
import { Ic342Page } from './components/targets/Ic342Page';
import { Ic63Page } from './components/targets/Ic63Page';
import { IrisNebulaPage } from './components/targets/IrisNebulaPage';
import { JellyfishNebulaPage } from './components/targets/JellyfishNebulaPage';
import { LagoonTrifidPage } from './components/targets/LagoonTrifidPage';
import { LeoTripletPage } from './components/targets/LeoTripletPage';
import { LobsterClawBubblePage } from './components/targets/LobsterClawBubblePage';
import { LunarPage } from './components/targets/LunarPage';
import { LunarEclipsePage } from './components/targets/LunarEclipsePage';
import { M13Page } from './components/targets/M13Page';
import { M31Page } from './components/targets/M31Page';
import { M33Page } from './components/targets/M33Page';
import { Ngc7822Page } from './components/targets/Ngc7822Page';
import { NorthAmericanAndPelicanPage } from './components/targets/NorthAmericanAndPelicanPage';
import { OrionNebulaPage } from './components/targets/OrionNebulaPage';
import { PacmanNebulaPage } from './components/targets/PacmanNebulaPage';
import { PelicanNebulaPage } from './components/targets/PelicanNebulaPage';
import { PerseusClusterPage } from './components/targets/PerseusClusterPage';
import { PleiadesPage } from './components/targets/PleiadesPage';
import { RosetteNebulaPage } from './components/targets/RosetteNebulaPage';
import { SoulNebulaPage } from './components/targets/SoulNebulaPage';
import { TemplatePage } from './components/targets/TemplatePage';
import { VeilNebulaPage } from './components/targets/VeilNebulaPage';
import { WhirlpoolGalaxyPage } from './components/targets/WhirlpoolGalaxyPage';

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