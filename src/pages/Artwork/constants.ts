import { SlideProps } from '@/pages/types.ts';

export const FLWR_GIRL_ASSETS = './images/artwork/flowers';
export const ARCHENGEL_ASSETS = './images/artwork/archengel';
export const GOOD_EVIL_ASSETS = './images/artwork/good-evil';

export const FLWR_GIRL_SLIDES: SlideProps[] = [
  {
    title: 'Sketch: Flowers & Girl',
    subtitle: 'To be determined.',
    image: `${FLWR_GIRL_ASSETS}/flower-girl.jpg`,
  },
];

export const ARCHENGEL_SLIDES: SlideProps[] = [
  {
    title: 'Archengel: Linework',
    subtitle: 'To be determined.',
    image: `${ARCHENGEL_ASSETS}/archengel-linewrk.png`,
  },
  {
    title: 'Archengel Composite Sketch',
    subtitle: 'To be determined.',
    image: `${ARCHENGEL_ASSETS}/archengel-sketch.jpg`,
  },
  {
    title: 'Archengel Solid Logo',
    subtitle: 'To be determined.',
    image: `${ARCHENGEL_ASSETS}/archengel-icon-gray.png`,
  },
];

export const GOOD_EVIL_SLIDES: SlideProps[] = [
  {
    title: 'Self-Reflection: no color',
    subtitle: 'To be determined.',
    image: `${GOOD_EVIL_ASSETS}/good-evil-nocolor.jpg`,
  },
  {
    title: 'Self-Reflection: color',
    subtitle: 'To be determined.',
    image: `${GOOD_EVIL_ASSETS}/good-evil-color-cropped.jpg`,
  },
];
