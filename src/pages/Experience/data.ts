import { ExperienceItemCardProps } from '@/components/Card/types.ts';
import {
  OL_PRG_SLIDES,
  OL_PRG_ASSETS,
  OL_CALIBRATOR_ASSSETS,
  OL_CALIBRATOR_SLIDES,
  OL_CLAY_ASSETS,
  PF_GEN_ASSETS,
  PF_RTS_ASSETS,
  PF_RCDA_ASSETS,
  ARCHENGEL_LLC_SLIDES,
  ARCHENGEL_SADE_SLIDES,
  PF_RCDA_SLIDES,
  PF_PE_SLIDES,
} from '@/pages/Experience/constants.ts';
import { ARCHENGEL_ASSETS } from '@/pages/Artwork/constants.ts';

export const experienceCards: ExperienceItemCardProps[] = [
  {
    id: 'clai-prg',
    title: 'Clai Studio: Programming App',
    description:
      'REWS programming dashboard that performed real-time calculations and data visualization based on bepoke spatial logic',
    imgPath: `${OL_PRG_ASSETS}/create.png`,
    imgAlt: '',
    slides: OL_PRG_SLIDES,
  },
  {
    id: 'calibrator',
    title: 'Calibrator: OneWBS ',
    description: 'Web application displaying historical REWS cost data for global REWS portfolio.',
    imgPath: `${OL_CALIBRATOR_ASSSETS}/calibrator-logo-no-bkgrd.png`,
    imgAlt: '',
    slides: OL_CALIBRATOR_SLIDES,
  },
  {
    id: 'clay',
    title: 'Clay Studio: Briefs & Designs',
    description:
      'Two of three legacy Web Applications that supported REWS analysis. Replaced by Clai.',
    imgPath: `${OL_CLAY_ASSETS}/designs-icon.png`,
    imgAlt: '',
  },
  {
    id: 'archengel-llc',
    title: 'Archengel LLC',
    description:
      "An LLC I've started to develop applications that support AECO workflows.  It's in stealth, so more to come...",
    imgPath: `${ARCHENGEL_ASSETS}/archengel-logo-blue8.png`,
    imgAlt: '',
    slides: ARCHENGEL_LLC_SLIDES,
  },
  {
    id: 'archengel-sade',
    title: 'Archengel LLC: SADE',
    description:
      'Bespoke Structural Analysis and Design Engine that contains a suite of calculation modules for real-time structural validation, reporting, and drawings from 2D/3D modeling input.',
    imgPath: `${ARCHENGEL_ASSETS}/archengel-logo-blue8.png`,
    imgAlt: '',
    slides: ARCHENGEL_SADE_SLIDES,
  },
  {
    id: 'frog-pe',
    title: 'ProjectFrog: FrogPE',
    description:
      'Frog Price Estimator was a Web Application performed price predictions using ML methods for a bespoke kit-of-parts, componentized building platform based upon mulitple features and data from various smartsheets. ',
    imgPath: `${PF_GEN_ASSETS}/pf-logo-blue-text-no-bkgrd.png`,
    imgAlt: '',
    slides: PF_PE_SLIDES,
  },
  {
    id: 'frog-rdca',
    title: 'ProjectFrog: RCDA',
    description:
      'Revit Construction Document/Model Automtation was a collection of bespoke revit plug-ins developed to automate construction documentation and modeling workflows.',
    imgPath: `${PF_RCDA_ASSETS}/pf-rcda-logo.png`,
    imgAlt: '',
    slides: PF_RCDA_SLIDES,
  },
  {
    id: 'revitosaw',
    title: 'ProjectFrog: ReviToSaw',
    description:
      'This Revit plug-in was developed to ingest, parse, visualize, and output the geometric/spatial of modeling elements for third-party vendors to consume with their saw-cutting software.',
    imgPath: `${PF_RTS_ASSETS}/pf-rts-icon.png`,
    imgAlt: '',
  },
];
