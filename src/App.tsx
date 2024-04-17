import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CssBaseline } from '@mui/material';

import { withErrorHandler } from '@/error-handling/index.tsx';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App/index.ts';
import Pages from '@/routes/Pages/index.ts';
import Header from '@/sections/Header/index.ts';
import HotKeys from '@/sections/HotKeys/index.ts';
import Notifications from '@/sections/Notifications/index.ts';
import SW from '@/sections/SW/index.ts';
import Sidebar from '@/sections/Sidebar/index.ts';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Notifications />
      <HotKeys />
      <SW />
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Pages />
      </BrowserRouter>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
