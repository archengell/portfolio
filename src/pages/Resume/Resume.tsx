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

{
  /* <Typography variant="h3">Page 4</Typography>
<Button
  to={`/${Math.random().toString()}`}
  component={Link}
  variant="outlined"
  sx={{ mt: 4 }}
  size="small"
  color="warning"
>
  Whant to check 404?
</Button> */
}
