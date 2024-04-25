// who what where when why

export type AboutContentProps = {
  id: string;
  description: string;
  title: string;
};

export const aboutContent: AboutContentProps[] = [
  {
    id: 'who',
    title: '...the Who',
    description:
      "Hey, I'm Kelly Justin Wilson: 'Kelly' has been a male first name in my family for generations, but I'm the first to have a middle name.  For those intrigued by labels, I'm an INTP, Pisces, swimmer, and triathlete as well. Since a younge age, I've been engaged in art, design, science fiction, math, and computers/technology. Over time, these passions coalesced into a refined career path combining architecture, structural engineering, and computer science / technology.",
  },
  {
    id: 'what',
    title: '...What',
    description:
      'Throughout my professional career, I have specialized in developing software solutions for the Architecture, Engineering, and Construction (AEC) industry. I have a track record of creating bespoke applications tailored to streamline and enhance workflows through automation. These applications process data efficiently for clients and vendors. In addition to my software development role, I am actively involved in projects in the residential and commercial sector as an architect and structural engineer. These projects often inspire, inform, and apply my personal software development endeavors, leading to the creation of Archengel, LLC. Lastly, I engage in diverse software projects involving 2D/3D geometry and graphics in my spare time.',
  },
  {
    id: 'where',
    title: '...Where',
    description:
      'I was born and raised in South Jersey where I thrived in soccer and track, indulged in skateboarding for almost a decade, established a website and a dedicated following focused on a reality influenced by the MiB comic/movie franchise, before transitioning to college in Pennsylvania.  Post undergraduate studies, I worked in DC for a little over two years, then relocated to Philadelphia in preparation for graduate school.  I pursued graduate studies at UC Berkeley, and have since settled in the Bay Area.',
  },
  {
    id: 'when',
    title: '...When',
    description:
      "Embarking on this unconventional path, I drew inspiration from 'The Fountainhead' by Ayn Rand, as well as the remarkable achievements of polymaths like Felix Candela and Santiago Calatrava. Subsequently, the groundbreaking work of Christopher Alexander, particularly in architecture and software architecture, profoundly influenced my intellectual pursuits. While navigating the academic realm of each discipline, I often grappled with uncertainties regarding the convergence of my knowledge. It was only upon entering the professional landscape and applying my skills in real-world scenarios that the synergistic relationship among these disciplines became apparent, forming a harmonious and impactful trilogy.",
  },
  {
    id: 'why',
    title: '...and, Why',
    description:
      "Why not, ha! I'm fortunate to have discovered a career path that resonates with my passions, abilities, and dedication. Equally crucial was the aspect of creative autonomy: the ability to independently materialize the majority of my ideas, whether in software development or building design, was a key priority for me.",
  },
];
