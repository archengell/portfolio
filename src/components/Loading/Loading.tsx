import { CircularProgress } from '@mui/material';

import { FullSizeCenteredFlexBox } from '@/components/styled.ts';
import { Colors } from '@lib/constants/colors.ts';

function Loading() {
  return (
    <FullSizeCenteredFlexBox>
      <CircularProgress disableShrink sx={{ color: Colors.Blue8 }} />
    </FullSizeCenteredFlexBox>
  );
}

export default Loading;
