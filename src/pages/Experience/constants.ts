import { SlideProps } from '@/pages/types.ts';

export const OL_PRG_ASSETS = './images/ol-clai-prg';
export const OL_CALIBRATOR_ASSSETS = './images/ol-calibrator';
export const OL_CLAY_ASSETS = './images/ol-clay-designs';
export const PF_GEN_ASSETS = './images/pf-gen';
export const PF_RTS_ASSETS = './images/pf-rts';
export const PF_RCDA_ASSETS = './images/pf-rcda';
export const PF_PE_ASSETS = './images/pf-pe';
export const ARCHENGEL_LLC_ASSETS = './images/archengel-llc';
export const ARCHENGEL_SADE_ASSETS = './images/archengel-sade';

export const OL_PRG_SLIDES: SlideProps[] = [
  {
    title: 'Configure A Program Study',
    subtitle:
      'The program study was initiated by a user specifying a few key inputs such as net occupiable area, worksplace strategy, and attendance rate.',
    image: `${OL_PRG_ASSETS}/configure.png`,
    width: 500,
  },
  {
    title: 'Dashboard View',
    subtitle:
      'After initial program generation, the user can edit program metrics, logic, strategy, amongst other adjustments, and the app will recalculate in real-time.',
    image: `${OL_PRG_ASSETS}/dashboard.png`,
    width: 500,
  },
  {
    title: 'Executive Report',
    subtitle:
      'An editable summary report is available upon initial program study generation, but also, reflects all user driven edits. Also, is available for download.',
    image: `${OL_PRG_ASSETS}/report.png`,
    width: 500,
  },
  {
    title: 'Create Another Study',
    subtitle:
      'Lastly, the app stored multiple program studies within a project to distribute, compare, and inform REWS decisions',
    image: `${OL_PRG_ASSETS}/create.png`,
    width: 500,
  },
];

export const OL_CALIBRATOR_SLIDES: SlideProps[] = [
  {
    title: 'Globalization Feature work',
    subtitle:
      'Implemented features for Calibrator the applied bepoke location amplifiers, currency exchange, and metric/imperial conversion to support global project comparison.',
    image: `${OL_CALIBRATOR_ASSSETS}/231130_calibrator_globalize_update.gif`,
    width: 500,
  },
  {
    title: 'Currency Exchange feature',
    subtitle:
      'Here is an example of currency exchange. There are numerous disconnected locations where state needed to be updated; this was handled by utilizing the flexibility of Recoil state management library.',
    image: `${OL_CALIBRATOR_ASSSETS}/230111_exchangeRate_diff.gif`,
    width: 500,
  },
];

export const ARCHENGEL_SADE_SLIDES: SlideProps[] = [
  {
    title: 'SADE: Weight Take Off',
    subtitle:
      'This module has presets with common floor and wall mass configurations while supporting edit functionality for customization.  This output from this module informs subsequent analysis as well as a report',
    image: `${ARCHENGEL_SADE_ASSETS}/weighup.gif`,
    width: 500,
  },
  {
    title: 'SADE: Main Wind Force Analysis',
    subtitle: 'Quick overview of the main wind force analysis module and calculation report',
    image: `${ARCHENGEL_SADE_ASSETS}/mwfrs.gif`,
    width: 500,
  },
];

export const ARCHENGEL_LLC_SLIDES: SlideProps[] = [
  {
    title: 'About Archengel LLC...',
    subtitle:
      'Still in progress, but a glimpse into setting up a project, the engineering modules, landing page, and login.',
    image: `${ARCHENGEL_LLC_ASSETS}/archengel-login.gif`,
    width: 500,
  },
];

export const PF_RTS_SLIDES: SlideProps[] = [
  {
    title: '',
    subtitle: '',
    image: '',
  },
];

export const PF_PE_SLIDES: SlideProps[] = [
  {
    title:
      'Glimpse into some notes/code snippets into the price prediction workflow for the wall panels of the building platform',
    subtitle: '',
    image: `${PF_PE_ASSETS}/notes-code-snippets.gif`,
    width: 500,
  },
];

export const PF_RCDA_SLIDES: SlideProps[] = [
  {
    title: 'RCDA-Text',
    subtitle:
      'This is a glimpse of keys for a specific drawing detail from a hashmap of structurally-driven text notes.  These keys are placed throughout the drawing set template and replaced with the associated value.',
    image: `${PF_RCDA_ASSETS}/rcda-text.png`,
    width: 500,
  },
  {
    title: 'RCDA-FDN (Foundations)',
    subtitle:
      'This option automates the foundation model elements based on ingested structural data.  Here is a diagram showing the link between RCDA and structural data identifiers for various building configurations.',
    image: `${PF_RCDA_ASSETS}/pf-rcda-ftg-auto.gif`,
    width: 500,
  },
];
