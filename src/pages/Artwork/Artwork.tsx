import { Box } from '@mui/material';
import { CardGroup } from '@/components/Card/CardGroup.tsx';
import { artworkCards } from '@/pages/Artwork/data.ts';

const Artwork = () => {
  return (
    <>
      <CardGroup cards={artworkCards} />
      <Box component={'div'} sx={{ height: '100px' }}></Box>
    </>
  );
};

export default Artwork;
