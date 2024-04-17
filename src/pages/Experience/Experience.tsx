import { CardGroup } from '@/components/Card/CardGroup.tsx';
import { experienceCards } from '@/pages/Experience/data.ts';

const Experience = () => {
  return (
    <>
      <CardGroup cards={experienceCards} />
    </>
  );
};

export default Experience;
