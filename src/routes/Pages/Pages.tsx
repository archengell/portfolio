import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import routes from '../index.ts';
import { getPageHeight } from './utils.ts';

function Pages() {
  return (
    <Box component={'div'} sx={{ height: (theme) => getPageHeight(theme) }}>
      <Routes>
        {Object.values(routes).map(({ path, component: Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
      </Routes>
    </Box>
  );
}

export default Pages;
