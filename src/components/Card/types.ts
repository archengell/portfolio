import { SlideProps } from '@/pages/types.ts';

export type BaseItemCardProps = {
  id: string;
  description: string;
  title: string;
  imgPath: string;
  imgAlt: string;
  slides?: SlideProps[];
};

export type ExperienceItemCardProps = BaseItemCardProps;

export type ArtworkItemCardProps = BaseItemCardProps;
