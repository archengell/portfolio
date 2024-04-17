import { Typography } from '@mui/material';

import { FullSizeCenteredFlexBox } from '@/components/styled.ts';
import { Colors } from '@lib/constants/colors.ts';

function About() {
  return (
    <>
      <FullSizeCenteredFlexBox>
        <Typography variant="h3" sx={{ color: Colors.Blue8 }}>
          Coming soon...
        </Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default About;
