import React from 'react';
import { pdfjs, Document, Page } from 'react-pdf';

import { Box, Paper } from '@mui/material';

import PDFPageControl from './PDFPageControl.tsx';
import { DownloadPDF } from '@/components/FABs/DownloadPDF.tsx';
// import useResizeObserver from '@/hooks/useResizeObserver.ts';
import { Colors } from '@lib/constants/colors.ts';
import { useWindowSize } from '@/hooks/useWindowSize.ts';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.js',
  import.meta.url,
).toString();

type PDFDocumentProps = {
  numPages: number;
};

const MAX_WIDTH = 700;
const MIN_WIDTH = 400;

type PDFFile = string | File | null;

export default function PDFViewer() {
  const [file] = React.useState<PDFFile>('./kelly_justin_wilson_resume.pdf');
  const [numPages, setNumPages] = React.useState(0);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [renderedPageNumber, setRenderedPageNumber] = React.useState<number | null>(null);
  const size = useWindowSize();
  const { width } = size;

  function onDocumentLoadSuccess({ numPages: _numPages }: PDFDocumentProps) {
    setNumPages(_numPages);
  }
  const changePage = React.useCallback(
    (offset: number) =>
      setPageNumber((prevPageNumber: number) => {
        const prevPage = prevPageNumber || 1;
        const nextPage = prevPage + offset;
        if (nextPage <= numPages && nextPage >= 1) {
          return nextPage;
        }
        return prevPage;
      }),
    [numPages],
  );

  const isLoading = renderedPageNumber !== pageNumber;

  return (
    <Box component={'div'} sx={{ mb: '150px', mt: '200px' }}>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Paper
          elevation={5}
          sx={{
            boxShadow: `0 0 30px ${Colors.Clear}`,
            '&:hover': {
              boxShadow: `0 0 30px`,
              color: Colors.Blue8,
            },
          }}
        >
          {isLoading && renderedPageNumber ? (
            <Page
              key={renderedPageNumber}
              pageNumber={renderedPageNumber}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              width={width < MAX_WIDTH ? MIN_WIDTH : MAX_WIDTH}
            />
          ) : null}
          <Page
            key={pageNumber}
            pageNumber={pageNumber}
            renderTextLayer={false}
            onRenderSuccess={() => setRenderedPageNumber(pageNumber)}
            renderAnnotationLayer={false}
            width={width < MAX_WIDTH ? MIN_WIDTH : MAX_WIDTH}
            onLoadSuccess={() => {
              if (pageNumber !== renderedPageNumber) {
                setRenderedPageNumber(pageNumber);
              }
            }}
          />
        </Paper>
        <PDFPageControl pageNumber={pageNumber} numPages={numPages} changePage={changePage} />
        <DownloadPDF file="./kelly_justin_wilson_resume.pdf" />
      </Document>
      <Box component={'div'} sx={{ height: '100px' }}></Box>
    </Box>
  );
}
