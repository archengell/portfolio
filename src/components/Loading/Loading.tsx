import { CircularProgress } from '@mui/material';

import { FullSizeCenteredFlexBox } from '@/components/styled.ts';

function Loading() {
  return (
    <FullSizeCenteredFlexBox>
      <CircularProgress />
    </FullSizeCenteredFlexBox>
  );
}

export default Loading;
