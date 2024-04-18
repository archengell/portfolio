// import BugReportIcon from '@mui/icons-material/BugReport';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import HomeIcon from '@mui/icons-material/Home';
// import TerrainIcon from '@mui/icons-material/Terrain';

import { AddTask, EmojiPeople, Gesture, HeadsetMic, Info, Laptop } from '@mui/icons-material';

import asyncComponentLoader from '@/utils/loader/index.tsx';

import { Pages, Routes } from './types.ts';

const routes: Routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/pages/Welcome/index.ts')),
    path: '/',
    title: 'Welcome',
    icon: EmojiPeople,
  },
  [Pages.About]: {
    component: asyncComponentLoader(() => import('@/pages/About/index.ts')),
    path: '/About',
    title: 'About Me',
    icon: Info,
  },
  [Pages.Resume]: {
    component: asyncComponentLoader(() => import('@/pages/Resume/index.ts')),
    path: '/Resume',
    title: 'Resume',
    icon: AddTask,
  },
  [Pages.Experience]: {
    component: asyncComponentLoader(() => import('@/pages/Experience/index.ts')),
    path: '/Experience',
    title: 'Experience',
    icon: Laptop,
  },
  [Pages.Artwork]: {
    component: asyncComponentLoader(() => import('@/pages/Artwork/index.ts')),
    path: '/Artwork',
    title: 'Artwork',
    icon: Gesture,
  },
  [Pages.Contact]: {
    component: asyncComponentLoader(() => import('@/pages/Contact/index.ts')),
    path: '/Contact',
    title: 'Contact',
    icon: HeadsetMic,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound/index.ts')),
    path: '*',
  },
};

export default routes;
