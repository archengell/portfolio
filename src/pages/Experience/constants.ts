import { SlideProps } from '@/pages/types.ts';

const PRG_WELCOME_ASSETS = 'src/assets/images/ol_clai_prg';

export const PRG_WELCOME_SLIDES: SlideProps[] = [
  {
    title: 'Welcome to CLAi Powered by BILT!',
    subtitle:
      'Automatically generate program studies and executive summary reports aligned with the latest BILT Guidance. Here is a quick walkthrough of how to use the tool.',
    image: `${PRG_WELCOME_ASSETS}/welcome.png`,
  },
  {
    title: 'Configure Study',
    subtitle:
      'To set up your program study, first specify your NOA, your strategy type and attendance rates. Click apply to generate an initial program that you can edit. You can always edit your starting point metrics later.',
    image: `${PRG_WELCOME_ASSETS}/configure.png`,
  },
  {
    title: 'Dashboard View',
    subtitle:
      'CLAi Powered by BILT will generate a program based on your starting point metrics and allow you to compare the program to the BILT guideposts and make your adjustments in the program cards.',
    image: `${PRG_WELCOME_ASSETS}/dashboard.png`,
  },
  {
    title: 'Executive Report',
    subtitle:
      'To easily share your results with others, the executive report tab automatically generates a summary report view. Note you can select edit pen icon on the bottom right.',
    image: `${PRG_WELCOME_ASSETS}/report.png`,
  },
  {
    title: 'Create Another Study',
    subtitle:
      'Once you have created a report you can return back to the project page to try out different strategies.',
    image: `${PRG_WELCOME_ASSETS}/create.png`,
  },
];
