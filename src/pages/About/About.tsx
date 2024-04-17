import { Typography } from '@mui/material';

import { FullSizeCenteredFlexBox } from '@/components/styled';
import { Colors } from '@lib/constants/colors';

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
