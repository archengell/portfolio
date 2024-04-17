import { ThemeProvider, createTheme } from '@mui/material/styles';

import useTheme from '@/store/theme/index.ts';

import themes from './themes.ts';
import type { CustomThemeProviderProps } from './types.ts';

function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  const [theme] = useTheme();

  return <ThemeProvider theme={createTheme(themes[theme])}>{children}</ThemeProvider>;
}

export default CustomThemeProvider;
