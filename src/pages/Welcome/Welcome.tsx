import { Box, Grid } from '@mui/material';
// import useOrientation from '@/hooks/useOrientation.ts';
import { IntroTerminal } from '@/components/AnimatedText/IntroTerminal.tsx';
import { Experience } from '@/3D_components/Experience.tsx';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Colors } from '@lib/constants/colors.ts';

const modelSpacing = { xs: 12, sm: 12, md: 12, lg: 12, xl: 7 };
const infoTerminalSpacing = { xs: 12, sm: 12, md: 12, lg: 12, xl: 5 };

const Welcome = () => {
  // const isPortrait = useOrientation();

  // const width = isPortrait ? '40%' : '30%';
  // const height = isPortrait ? '30%' : '40%';

  return (
    <>
      <Box
        // hacky work-around: https://stackoverflow.com/questions/68692230/ts-expression-produces-a-union-type-that-is-too-complex-to-represent-with-materi
        component="div"
        sx={{
          mt: '20vh',
          padding: '1vw',
          alignItems: 'flex-start',
        }}
      >
        <Grid container spacing={4} gap={{ xs: 20, sm: 10, md: 0, lg: 0 }}>
          <Grid item sx={{ height: '300px' }} {...infoTerminalSpacing}>
            <IntroTerminal />
            {/* <Paper sx={{ display: 'flex', height: '300px', backgroundColor: Colors.Blue8 }} /> */}
          </Grid>
          <Grid item {...modelSpacing}>
            <Canvas
              camera={{ position: [0, 3, 4], fov: 40 }}
              style={{
                height: '500px',
                borderRadius: '10px',
                border: `2px solid ${Colors.Blue8}`,
              }}
            >
              <OrbitControls makedefault />
              {/*
               ** https://github.com/pmndrs/drei/issues/395
               ** CDN hosting issue with githack - known issue -
               ** best sln is to download asset and host locally or own CDN - chose former
               ** also, they've since created a more stable CDN => https://market.pmnd.rs/hdri/potsdamer-platz
               */}
              <Environment path="/hdri" files="/potsdamer_platz_1k.hdr" />
              <Experience />
            </Canvas>
            {/* <Paper sx={{ display: 'flex', height: '100px', backgroundColor: Colors.Blue4 }} /> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Welcome;
