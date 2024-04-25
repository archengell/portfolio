import { useCallback, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';

import { Box, Paper } from '@mui/material';

import PDFPageControl from './PDFPageControl.tsx';
import { DownloadPDF } from '@/components/FABs/DownloadPDF.tsx';
import useResizeObserver from '@/hooks/useResizeObserver.ts';
import { Colors } from '@lib/constants/colors.ts';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.js',
  import.meta.url,
).toString();

type PDFDocumentProps = {
  numPages: number;
};

const resizeObserverOptions = {};
const MAX_WIDTH = 700;

type PDFFile = string | File | null;

export default function PDFViewer() {
  const [file] = useState<PDFFile>('./kelly_justin_wilson_resume.pdf');
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [renderedPageNumber, setRenderedPageNumber] = useState<number | null>(null);
  const [containerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess({ numPages: _numPages }: PDFDocumentProps) {
    setNumPages(_numPages);
  }
  const changePage = useCallback(
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
    <Box component={'div'} sx={{ mb: '150px' }}>
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
              width={containerWidth ? Math.min(containerWidth, MAX_WIDTH) : MAX_WIDTH}
            />
          ) : null}
          <Page
            key={pageNumber}
            pageNumber={pageNumber}
            renderTextLayer={false}
            onRenderSuccess={() => setRenderedPageNumber(pageNumber)}
            renderAnnotationLayer={false}
            width={containerWidth ? Math.min(containerWidth, MAX_WIDTH) : MAX_WIDTH}
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
      <Box component={'div'} sx={{ width: '200px' }}></Box>
    </Box>
  );
}
