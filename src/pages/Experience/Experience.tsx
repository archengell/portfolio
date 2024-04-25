import { Box } from '@mui/material';
import { CardGroup } from '@/components/Card/CardGroup.tsx';
import { experienceCards } from '@/pages/Experience/data.ts';

const Experience = () => {
  return (
    <>
      <CardGroup cards={experienceCards} />
      {/* hack to lengthen scroll so last card is completely visible*/}
      <Box component={'div'} sx={{ height: '100px' }}></Box>
    </>
  );
};

export default Experience;
