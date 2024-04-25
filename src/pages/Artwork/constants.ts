import { SlideProps } from '@/pages/types.ts';

export const FLWR_GIRL_ASSETS = './images/artwork/flowers';
export const ARCHENGEL_ASSETS = './images/artwork/archengel';
export const GOOD_EVIL_ASSETS = './images/artwork/good-evil';

export const FLWR_GIRL_SLIDES: SlideProps[] = [
  {
    title: 'Sketch: Flowers & Girl',
    subtitle: 'In progress...',
    image: `${FLWR_GIRL_ASSETS}/flower-girl.jpg`,
  },
];

export const ARCHENGEL_SLIDES: SlideProps[] = [
  {
    title: 'Archengel: Linework',
    subtitle: 'In progress....',
    image: `${ARCHENGEL_ASSETS}/archengel-linewrk.png`,
  },
  {
    title: 'Archengel Composite Sketch',
    subtitle: 'In progress....',
    image: `${ARCHENGEL_ASSETS}/archengel-sketch.jpg`,
  },
  {
    title: 'Archengel Solid Logo',
    subtitle: 'In progress....',
    image: `${ARCHENGEL_ASSETS}/archengel-icon-gray.png`,
  },
  {
    title: 'Archengel Composition 1',
    subtitle: 'First set of runes/symbols that inspired the design.',
    image: `${ARCHENGEL_ASSETS}/archengel-components-1.jpg`,
  },
  {
    title: 'Archengel Composition 2',
    subtitle: 'Second set of symbols.',
    image: `${ARCHENGEL_ASSETS}/archengel-components-2.jpg`,
  },
];

export const GOOD_EVIL_SLIDES: SlideProps[] = [
  {
    title: 'Self-Reflection: no color',
    subtitle: 'In progress....',
    image: `${GOOD_EVIL_ASSETS}/good-evil-nocolor.jpg`,
  },
  {
    title: 'Self-Reflection: color',
    subtitle: 'In progress....',
    image: `${GOOD_EVIL_ASSETS}/good-evil-color-cropped.jpg`,
  },
];
