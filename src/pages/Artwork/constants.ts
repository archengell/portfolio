import { SlideProps } from '@/pages/types.ts';

export const FLWR_GIRL_ASSETS = 'src/assets/images/artwork/flowers';
export const ARCHENGEL_ASSETS = 'src/assets/images/artwork/archengel';
export const GOOD_EVIL_ASSETS = 'src/assets/images/artwork/good_evil';

export const FLWR_GIRL_SLIDES: SlideProps[] = [
  {
    title: 'Sketch: Flowers & Girl',
    subtitle: 'To be determined.',
    image: `${FLWR_GIRL_ASSETS}/flower_girl.jpg`,
  },
];

export const ARCHENGEL_SLIDES: SlideProps[] = [
  {
    title: 'Archengel: Linework',
    subtitle: 'To be determined.',
    image: `${ARCHENGEL_ASSETS}/archengel_linewrk.png`,
  },
  {
    title: 'Archengel Composite Sketch',
    subtitle: 'To be determined.',
    image: `${ARCHENGEL_ASSETS}/archengel_sketch.jpg`,
  },
  {
    title: 'Archengel Solid Logo',
    subtitle: 'To be determined.',
    image: `${ARCHENGEL_ASSETS}/archengel_Icon_gray.png`,
  },
];

export const GOOD_EVIL_SLIDES: SlideProps[] = [
  {
    title: 'Self-Reflection: no color',
    subtitle: 'To be determined.',
    image: `${GOOD_EVIL_ASSETS}/good_evil_nocolor.jpg`,
  },
  {
    title: 'Self-Reflection: color',
    subtitle: 'To be determined.',
    image: `${GOOD_EVIL_ASSETS}/good_evil_color_cropped.jpg`,
  },
];
