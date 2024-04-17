import { ExperienceItemCardProps } from '@/components/Card/types.ts';
import { PRG_WELCOME_SLIDES } from '@/pages/Experience/constants.ts';

export const experienceCards: ExperienceItemCardProps[] = [
  {
    id: 'clai-prg',
    title: 'Clai Studio: Programming App',
    description:
      'REWS programming dashboard that performed real-time calculations and data visualization based on bepoke spatial logic',
    imgPath: 'src/assets/images/ol_clai_prg/create.png',
    imgAlt: '',
    slides: PRG_WELCOME_SLIDES,
  },
  {
    id: 'calibrator',
    title: 'Calibrator: OneWBS ',
    description: 'Web application displaying historical REWS cost data for global REWS portfolio.',
    imgPath: 'src/assets/images/ol_calibrator/calibrator-logo.png',
    imgAlt: '',
  },
  {
    id: 'clay',
    title: 'Clay Briefs | Designs',
    description:
      'Two Web Applications that performed site and building configuration, feasibility, and programmatic studies.',
    imgPath: 'src/assets/images/ol_clay_designs/designs-icon.png',
    imgAlt: '',
  },
  {
    id: 'frog-pe',
    title: 'ProjectFrog: FrogPE',
    description: '',
    imgPath: '',
    imgAlt: '',
  },
  {
    id: 'frog-rdca',
    title: 'ProjectFrog: RCDA',
    description: '',
    imgPath: '',
    imgAlt: '',
  },
  {
    id: 'revitosaw',
    title: 'ProjectFrog: ReviToSaw',
    description: '',
    imgPath: '',
    imgAlt: '',
  },
  {
    id: 'sae',
    title: 'ProjectFrog: SAE',
    description: '',
    imgPath: '',
    imgAlt: '',
  },
  {
    id: 'frog-db',
    title: 'ProjectFrog: FrogDB',
    description: '',
    imgPath: '',
    imgAlt: '',
  },
];
