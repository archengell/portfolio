import { ArtworkItemCardProps } from '@/components/Card/types.ts';
import {
  FLWR_GIRL_SLIDES,
  FLWR_GIRL_ASSETS,
  ARCHENGEL_ASSETS,
  ARCHENGEL_SLIDES,
  GOOD_EVIL_ASSETS,
  GOOD_EVIL_SLIDES,
} from './constants.ts';

// TODO: possibly clean this up with a array storage and use map()
export const artworkCards: ArtworkItemCardProps[] = [
  {
    id: 'flower-girl',
    title: 'Flowers & Girl',
    description: 'In progress...',
    imgPath: `${FLWR_GIRL_ASSETS}/flower-girl.jpg`,
    imgAlt: '',
    slides: FLWR_GIRL_SLIDES,
  },
  {
    id: 'archengel',
    title: 'Life of Archengel',
    description: 'In progress...',
    imgPath: `${ARCHENGEL_ASSETS}/archengel-logo-blue8.png`,
    imgAlt: '',
    slides: ARCHENGEL_SLIDES,
  },
  {
    id: 'self-reflection',
    title: 'Self Reflection',
    description: 'In progress...',
    imgPath: `${GOOD_EVIL_ASSETS}/good-evil-nocolor.jpg`,
    imgAlt: '',
    slides: GOOD_EVIL_SLIDES,
  },
];
