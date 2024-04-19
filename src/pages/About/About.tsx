import { Paper, Typography } from '@mui/material';

import { FullSizeCenteredFlexBox } from '@/components/styled.ts';
import { borderProps } from '@lib/constants/styling.ts';
import { Colors } from '@lib/constants/colors.ts';

function About() {
  return (
    <>
      <FullSizeCenteredFlexBox>
        {/* <Typography variant="h3" sx={{ color: Colors.Blue8 }}>
          Coming soon...
        </Typography> */}
        <Paper
          elevation={3}
          sx={{ display: 'flex', overflow: 'auto', ...borderProps, width: '50vw', height: '30vh' }}
        >
          <Typography paragraph gutterBottom sx={{ color: Colors.Blue8, p: '30px' }}>
            Hello again. I&aposm going to dive a bit more into who I am and what drives me. <br />{' '}
            <br />
            From an early age, I was drawn to creative design/artwork, science fiction, math, and
            computers, amongst a few other things. As I matured, these interests evolved from an
            inchoate cloud of professional ideation into a refined, focused decision on a career
            covering three disciplines.
          </Typography>
        </Paper>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default About;
