import React from 'react';
import { saveAs } from 'file-saver';

import { Fab } from '@mui/material';
import { DownloadOutlined } from '@mui/icons-material';

import { Colors } from '@lib/constants/colors.ts';
import useTheme from '@/store/theme/index.ts';
import { Themes } from '@/theme/types.ts';

export type TDwnLoadPDFFabProps = {
  file: string;
};

export const DownloadPDF: React.FC<TDwnLoadPDFFabProps> = ({ file }) => {
  const [theme] = useTheme();
  const handleDownload = () => {
    saveAs(file, 'kelly_justin_wilson_resume.pdf', { autoBom: true });
  };

  return (
    <Fab
      aria-label="download-pdf"
      sx={{
        position: 'fixed',
        bottom: '80px',
        right: '24px',
        backgroundColor: theme === Themes.DARK ? Colors.Dark3 : Colors.Light1,
        border: `1px solid ${Colors.Blue8}`,
        '&:hover': {
          boxShadow: `0px 0px 30px ${Colors.Blue8}`,
        },
      }}
      onClick={handleDownload}
    >
      <DownloadOutlined fontSize="large" sx={{ color: Colors.Blue8 }} />
    </Fab>
  );
};
