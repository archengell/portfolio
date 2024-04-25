import React from 'react';
import { Stack, Paper, Typography } from '@mui/material';
import { Colors } from '@lib/constants/colors.ts';
import { borderProps } from '@lib/constants/styling.ts';
import { AboutContentProps } from './data.ts';
import { motion, Variants } from 'framer-motion';

const titleVariants: Variants = {
  onscreen: {
    transition: {
      type: 'spring',
      bounce: '0.8',
    },
  },
};

export const AboutContent = ({ title, description }: AboutContentProps) => {
  const paperRef = React.useRef(null);
  return (
    <>
      <Stack sx={{ minHeight: 'calc(100vh-100px)', overflowY: 'auto', ml: '15vw' }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          variants={titleVariants}
          viewport={{ root: paperRef }}
        >
          <Typography
            sx={{
              fontSize: '48px',
              fontWeight: 700,
              zIndex: 3,
              top: '30px',
              left: 0,
              position: 'relative',
              color: Colors.Blue8,
              textShadow: `2px 2px 2px black`,
            }}
          >
            {title}
          </Typography>
        </motion.div>
        <Paper
          ref={paperRef}
          elevation={20}
          sx={{
            display: 'flex',
            overflow: '',
            ...borderProps,
            width: '70vw',
            height: 'auto',
          }}
        >
          <Typography
            paragraph
            gutterBottom
            sx={{
              color: Colors.Blue8,
              p: '30px',
              fontSize: { xs: '14px', sm: '14px', md: '18px', lg: '20px' },
            }}
          >
            {description}
          </Typography>
        </Paper>
      </Stack>
    </>
  );
};
