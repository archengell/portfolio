import React from 'react';
import { Button, Stack, Typography } from '@mui/material';

import { Colors } from '@lib/constants/colors.ts';

type PDFPageControlProps = {
  pageNumber: number;
  numPages: number;
  changePage: (arg0: number) => void;
};

export default function PDFPageControl({ pageNumber, numPages, changePage }: PDFPageControlProps) {
  const prevPage = React.useCallback(() => changePage(-1), [changePage]);
  const nextPage = React.useCallback(() => changePage(1), [changePage]);

  const curPageNumber = pageNumber || 1;
  const numPagesString = numPages || '--';

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ justifyContent: 'center', alignItems: 'center', mt: '10px' }}
    >
      <Button
        variant="outlined"
        onClick={prevPage}
        disabled={curPageNumber <= 1}
        sx={{ border: `1px solid ${Colors.Blue8}`, backgroundColor: Colors.Clear }}
      >
        <Typography sx={{ color: Colors.Blue8 }}>{'<'}</Typography>
      </Button>
      <Typography sx={{ color: Colors.Blue8, fontWeight: '700' }}>{`${
        curPageNumber || numPagesString
      } OF ${numPagesString}`}</Typography>
      <Button
        variant="outlined"
        disabled={curPageNumber >= (numPages || 0)}
        onClick={nextPage}
        sx={{ border: `2px solid ${Colors.Blue8}`, backgroundColor: Colors.Clear }}
      >
        <Typography sx={{ color: Colors.Blue8 }}>{'>'}</Typography>
      </Button>
    </Stack>
  );
}
