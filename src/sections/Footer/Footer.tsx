import { AppBar, Box, Typography, Toolbar } from '@mui/material';
import useTheme from '@/store/theme/index.ts';
import { Themes } from '@/theme/types.ts';
import { Colors } from '@lib/constants/colors.ts';

const Footer = () => {
  const [theme] = useTheme();
  return (
    <>
      <Box component={'div'} sx={{ width: '100%' }}>
        <AppBar
          elevation={4}
          sx={{
            top: 'auto',
            bottom: 0,
            backgroundColor: `${theme === Themes.DARK ? Colors.Dark5 : Colors.Light1}`,
            borderTop: `2px solid ${Colors.Blue8}`,
          }}
        >
          <Toolbar>
            {' '}
            <Typography
              sx={{
                color: Colors.Blue8,
                fontSize: { xs: '12px', sm: '12px', md: '16px', lg: '20px' },
              }}
            >
              {'\u00A9 2024 Kelly Justin Wilson. All Rights Reserved.'}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Footer;
