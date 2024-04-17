import { Box, Grid } from '@mui/material';
// import useOrientation from '@/hooks/useOrientation.ts';
import { IntroTerminal } from '@/components/AnimatedText/IntroTerminal.tsx';
import { Experience } from '@/3D_components/Experience.tsx';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Colors } from '@lib/constants/colors.ts';

const gridSpacing = { xs: 12, sm: 12, m: 6, lg: 6 };

const Welcome = () => {
  // const isPortrait = useOrientation();

  // const width = isPortrait ? '40%' : '30%';
  // const height = isPortrait ? '30%' : '40%';

  return (
    <>
      {/* <Meta title="Welcome" /> */}
      <Box
        // hacky work-around: https://stackoverflow.com/questions/68692230/ts-expression-produces-a-union-type-that-is-too-complex-to-represent-with-materi
        component="div"
        sx={{
          flexGrow: 1,
          display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // minHeight: '100vh',
        }}
      >
        {/* <Box
          component={'div'}
          sx={{
            display: 'block',
            position: 'static',
            ml: '50px',
            height: '100%',
            alignSelf: 'flex-start',
            mt: '50px',
            zIndex: 1,
          }}
        > */}
        <Grid container wrap="nowrap">
          <Grid item {...gridSpacing}>
            <IntroTerminal />
            {/* <Paper
              sx={{ display: 'flex', height: '100px', backgroundColor: Colors.Blue8, mt: '400px' }}
            /> */}
          </Grid>
          <Grid item {...gridSpacing}>
            <Canvas
              camera={{ position: [0, 3, 4], fov: 40 }}
              style={{ height: '700px', borderRadius: '10px', border: `2px solid ${Colors.Blue8}` }}
            >
              <OrbitControls makedefault />
              <Environment preset="city" />
              <Experience />
            </Canvas>
            {/* <Paper
              sx={{ display: 'flex', height: '100px', backgroundColor: Colors.Blue4, mt: '400px' }}
            /> */}
          </Grid>
        </Grid>
        {/* </Box> */}
      </Box>
    </>
  );
};

export default Welcome;
