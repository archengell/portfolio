import { FullSizeCenteredFlexBox } from '@/components/styled.ts';
import PDFViewer from './PdfViewer.tsx';

const Resume = () => {
  return (
    <>
      <FullSizeCenteredFlexBox
        flexDirection="column"
        sx={{ mt: '350px', width: '100%', height: '75vh' }}
      >
        <PDFViewer />
      </FullSizeCenteredFlexBox>
    </>
  );
};

export default Resume;
