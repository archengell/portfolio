import React from 'react';
import { saveAs } from 'file-saver';

import { Fab } from '@mui/material';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

import { Colors } from '@lib/constants/colors.ts';
// import useTheme from '@/store/theme';
// import { Themes } from '@/theme/types';

export type TDwnLoadPDFFabProps = {
  file: string;
};

export const DownloadPDF: React.FC<TDwnLoadPDFFabProps> = ({ file }) => {
  const handleDownload = () => {
    saveAs(file, 'kelly_justin_wilson_resume.pdf', { autoBom: true });
  };

  return (
    <Fab
      aria-label="download-pdf"
      sx={{
        position: 'fixed',
        bottom: '40px',
        right: '24px',
        backgroundColor: Colors.Clear,
        border: `1px solid ${Colors.Blue8}`,
        '&:hover': {
          boxShadow: `0px 0px 30px ${Colors.Blue8}`,
        },
      }}
      onClick={handleDownload}
    >
      <DownloadOutlinedIcon fontSize="large" sx={{ color: Colors.Blue8 }} />
    </Fab>
  );
};
