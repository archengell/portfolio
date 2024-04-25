import React from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Box, Stack, Typography } from '@mui/material';

import { CenteredFlexBox } from '@/components/styled.ts';
import { Colors } from '@lib/constants/colors.ts';
import { Avatar } from '@/3D_components/Avatar.tsx';
import { Rug } from '@/3D_components/Rug.tsx';
import { Skateboard } from '@/3D_components/Skateboard.tsx';
import { SpiderPlant } from '@/3D_components/SpiderPlant.tsx';

import ContactIcons from './ContactIcons.tsx';

const borderProps = { border: `2px solid ${Colors.Blue8}`, borderRadius: '10px' };

const Contact: React.FC = () => {
  return (
    <>
      <Stack
        direction={{ xs: 'column', sm: 'column', md: 'row' }}
        gap={6}
        sx={{ justifyContent: 'center', alignItems: 'center', mt: '20vh', ml: '2vw', mr: '2vw' }}
      >
        <CenteredFlexBox
          sx={{
            flexDirection: 'column',
            height: '200px',
            width: { xs: '80vw', sm: '400px', md: '400px' },
            ...borderProps,
          }}
        >
          <Typography fontSize="36px" fontWeight="700" sx={{ color: Colors.Blue8, mb: '10px' }}>
            {'Alright, see ya ; )'}
          </Typography>
          <ContactIcons />
        </CenteredFlexBox>
        <CenteredFlexBox
          sx={{
            height: '600px',
            width: { xs: '80vw', sm: '400px', md: '400px' },
            ...borderProps,
          }}
        >
          <Canvas camera={{ fov: 30 }}>
            <Environment preset="city" />
            <ambientLight intensity={1} />
            <group position={[0, -1, 0]}>
              <Avatar animation="Standing Greeting" />
            </group>
            <group position={[0, -1, 0]} scale={0.3}>
              <Rug />
            </group>
            <group
              position={[0.3, -1, 0.5]}
              scale={0.008}
              rotation={[0, THREE.MathUtils.degToRad(90), 0]}
            >
              <Skateboard />
            </group>
            <group position={[-0.5, -1, 0]}>
              <SpiderPlant />
            </group>
          </Canvas>
        </CenteredFlexBox>
        <Box component={'div'} sx={{ height: '100px' }} />
      </Stack>
    </>
  );
};

export default Contact;
