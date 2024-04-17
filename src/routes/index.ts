// import BugReportIcon from '@mui/icons-material/BugReport';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import HomeIcon from '@mui/icons-material/Home';
// import TerrainIcon from '@mui/icons-material/Terrain';

// @ts-expect-error
import AddTaskIcon from '@mui/icons-material/AddTask';
// @ts-expect-error
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
// @ts-expect-error
import InfoIcon from '@mui/icons-material/Info';
// @ts-expect-error
import LaptopIcon from '@mui/icons-material/Laptop';
// @ts-expect-error
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
// @ts-expect-error
import GestureIcon from '@mui/icons-material/Gesture';

import asyncComponentLoader from '@/utils/loader/index.tsx';

import { Pages, Routes } from './types.ts';

const routes: Routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/pages/Welcome/index.ts')),
    path: '/',
    title: 'Welcome',
    icon: EmojiPeopleIcon,
  },
  [Pages.About]: {
    component: asyncComponentLoader(() => import('@/pages/About/index.ts')),
    path: '/About',
    title: 'About Me',
    icon: InfoIcon,
  },
  [Pages.Resume]: {
    component: asyncComponentLoader(() => import('@/pages/Resume/index.ts')),
    path: '/Resume',
    title: 'Resume',
    icon: AddTaskIcon,
  },
  [Pages.Experience]: {
    component: asyncComponentLoader(() => import('@/pages/Experience/index.ts')),
    path: '/Experience',
    title: 'Experience',
    icon: LaptopIcon,
  },
  [Pages.Artwork]: {
    component: asyncComponentLoader(() => import('@/pages/Artwork/index.ts')),
    path: '/Artwork',
    title: 'Artwork',
    icon: GestureIcon,
  },
  [Pages.Contact]: {
    component: asyncComponentLoader(() => import('@/pages/Contact/index.ts')),
    path: '/Contact',
    title: 'Contact',
    icon: HeadsetMicIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound/index.ts')),
    path: '*',
  },
};

export default routes;
