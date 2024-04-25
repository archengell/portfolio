import React from 'react';
import { professions } from '../../../lib/constants/terms.ts';
import { TypeAnimation } from 'react-type-animation';
import { Box, Typography } from '@mui/material';
import { Colors } from '@lib/constants/colors.ts';
import useTheme from '@/store/theme/index.ts';
import { Themes } from '@/theme/types.ts';
import './custom-cursor.css';

/**
 * @info https://www.npmjs.com/package/react-type-animation
 * @examples https://react-type-animation.netlify.app/examples
 * @returns
 */
export const IntroTerminal = () => {
  const [theme] = useTheme();

  return (
    <>
      <Box
        component={'div'}
        sx={{
          backgroundColor: theme === Themes.DARK ? Colors.Dark5 : Colors.Light2,
          color: '#fff',
          fontFamily: 'monospace',
          padding: '20px',
          borderRadius: '10px',
          minHeight: '200px',
          width: { sx: '98vw', sm: '98vw', md: '98vw', lg: '700px' },
          overflowY: 'auto',
          textAlign: 'start',
          border: `2px solid ${Colors.Blue8}`,
        }}
      >
        <Box component={'div'} display="flex">
          <Typography sx={{ fontSize: '20px', fontWeight: 700, color: Colors.Blue8, mr: '5px' }}>
            {'~/intro: '}
          </Typography>
          <TypeAnimation
            sequence={[
              `Hello, Kelly here 👋🏾 . Thanks for stopping by. Please enjoy the glimpse into my world as ${professions.Architect}, ${professions.StructuralEngineer}, ${professions.SoftwareEngineer}, ${professions.Artist}, and most importantly, a Sci-Fi/Fantasy Nerd.. \nAppreciate you.`,
            ]}
            wrapper="span"
            speed={10}
            cursor={false}
            style={{
              whiteSpace: 'pre-wrap',
              fontSize: '20px',
              fontWeight: 400,
              display: 'inline-block',
              width: '700px',
              zIndex: 0,
              position: undefined,
              color: Colors.Blue8,
            }}
            className="typing"
          />
        </Box>
      </Box>
    </>
  );
};
