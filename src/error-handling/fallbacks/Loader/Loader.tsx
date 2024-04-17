import { Box, Typography } from '@mui/material';

import { messages } from '@/config/index.ts';

function LoaderErrorBoundaryFallback() {
  return (
    <Box component={'div'}>
      <Typography variant="h5">{messages.loader.fail}</Typography>
    </Box>
  );
}

export default LoaderErrorBoundaryFallback;
