import { Box, Grid } from '@mui/material';
import { AboutContent } from './AboutContent.tsx';
import { aboutContent, AboutContentProps } from './data.ts';

const gridSpacing = { xs: 12, sm: 12, md: 12, lg: 12 };

const About = () => {
  return (
    <>
      <Grid container spacing={4} sx={{ mt: '10vh' }}>
        {aboutContent.map((item: AboutContentProps) => {
          return (
            <Grid key={item.id} item {...gridSpacing}>
              <AboutContent {...item} />
            </Grid>
          );
        })}
      </Grid>
      {/* hack to extend viewport past the last about section */}
      <Box component={'div'} sx={{ height: '100px' }}></Box>
    </>
  );
};

export default About;
