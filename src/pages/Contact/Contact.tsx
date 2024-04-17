import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Stack, Typography } from '@mui/material';

import { CenteredFlexBox } from '@/components/styled.ts';
import { Colors } from '@lib/constants/colors.ts';
import { Avatar } from '@/3D_components/Avatar.tsx';

import ContactIcons from './ContactIcons.tsx';

const borderProps = { border: `2px solid ${Colors.Blue8}`, borderRadius: '10px' };

const Contact: React.FC = () => {
  return (
    <>
      <Stack direction="row" columnGap={6} sx={{ alignItems: 'center', mt: '10vh' }}>
        <CenteredFlexBox
          sx={{
            flexDirection: 'column',
            height: '200px',
            width: '500px',
            ml: '500px',
            ...borderProps,
          }}
        >
          <Typography fontSize="36px" fontWeight="700" sx={{ color: Colors.Blue8, mb: '10px' }}>
            {'Hey, reach out ; )'}
          </Typography>
          <ContactIcons />
          {/* <ContactForm /> */}
        </CenteredFlexBox>
        <Canvas camera={{ fov: 30 }} style={{ height: '600px', width: '400px', ...borderProps }}>
          <Environment preset="city" />
          <ambientLight intensity={1} />
          {/* <OrbitControls /> */}
          <group position={[0, -1, 0]}>
            <Avatar animation="Standing Greeting" />
          </group>
        </Canvas>
      </Stack>
    </>
  );
};

export default Contact;
