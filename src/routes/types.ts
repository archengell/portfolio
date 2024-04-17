import React from 'react';
import { PathRouteProps } from 'react-router-dom';

import type { SvgIconProps } from '@mui/material/SvgIcon';

export enum Pages {
  Welcome,
  About,
  Resume,
  Experience,
  Artwork,
  Contact,
  NotFound,
}

type PathRouteCustomProps = {
  title?: string;
  component: React.FC;
  icon?: React.FC<SvgIconProps>;
};

export type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>;
