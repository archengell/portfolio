import { CardGroup } from '@/components/Card/CardGroup.tsx';
import { artworkCards } from '@/pages/Artwork/data.ts';

const Artwork = () => {
  return (
    <>
      <CardGroup cards={artworkCards} />
    </>
  );
};

export default Artwork;
