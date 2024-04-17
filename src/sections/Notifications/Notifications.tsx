import React from 'react';
import { CustomContentProps, SnackbarProvider } from 'notistack';
import { Alert, AlertTitle } from '@mui/material';
import { notifications } from '@/config/index.ts';
import Notifier from './Notifier/index.ts';

// here how you can define your own notification component

const CustomNotification = React.forwardRef(function CustomNotification(
  { message }: CustomContentProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <Alert ref={ref} severity="info">
      <AlertTitle>{'Random IT Joke :)'}</AlertTitle>
      {message}
    </Alert>
  );
});

function Notifications() {
  return (
    <SnackbarProvider
      maxSnack={notifications.maxSnack}
      Components={{
        customNotification: CustomNotification,
      }}
    >
      <Notifier />
    </SnackbarProvider>
  );
}

export default Notifications;
