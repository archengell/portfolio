import { Email, RestartAlt } from '@mui/icons-material';
import { Box, Button, Paper, Typography } from '@mui/material';
import { Colors } from '@lib/constants/colors.ts';

import { FullSizeCenteredFlexBox } from '@/components/styled.ts';
import { email, messages } from '@/config/index.ts';
import resetApp from '@/utils/reset-app.ts';

const borderProps = { border: `2px solid ${Colors.Blue8}`, borderRadius: '10px' };

function AppErrorBoundaryFallback() {
  return (
    <Box component={'div'} height={400}>
      <FullSizeCenteredFlexBox>
        <Paper elevation={5} sx={{ p: 5, ...borderProps }}>
          <Typography variant="h5" component="h3" sx={{ colors: Colors.Blue8 }}>
            {messages.app.crash.title}
          </Typography>
          <Button
            startIcon={<Email />}
            variant="outlined"
            target="_blank"
            rel="noreferrer"
            href={`mailto: ${email}`}
            sx={{ my: 3 }}
            color="info"
          >
            {messages.app.crash.options.email}
          </Button>
          <Typography component="h6">or</Typography>
          <Button
            startIcon={<RestartAlt />}
            sx={{ mt: 3 }}
            variant="outlined"
            onClick={resetApp}
            color="info"
          >
            {messages.app.crash.options.reset}
          </Button>
        </Paper>
      </FullSizeCenteredFlexBox>
    </Box>
  );
}

export default AppErrorBoundaryFallback;
