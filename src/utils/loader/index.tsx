import Loading from '@/components/Loading/index.ts';
import { loader as loaderDefaultOptions } from '@/config/index.ts';

import asyncComponentLoader from './loader.tsx';
import type { AnyProps, LoadComponent, LoaderDefaultOptions } from './types.ts';

const configuredAsyncComponentLoader = (
  loadComponent: LoadComponent,
  additionalProps: AnyProps = {},
  loaderOptions: LoaderDefaultOptions = loaderDefaultOptions,
  FallbackWaiting = Loading,
) => asyncComponentLoader(loadComponent, additionalProps, loaderOptions, FallbackWaiting);

export { loaderDefaultOptions };
export default configuredAsyncComponentLoader;
