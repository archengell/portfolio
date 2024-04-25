import React from 'react';
import { styled } from '@mui/system';
import { Box, Button, Typography, Stack } from '@mui/material';
import { Colors } from '@lib/constants/colors.ts';
import { SlideProps } from '@/pages/types.ts';

const PaginationButton = styled('button')({
  backgroundColor: 'transparent',
  borderRadius: '20px',
  border: '1px solid transparent',
  padding: '10px',
  '&:focus-visible, &:hover': {
    border: `1px solid ${Colors.Blue6}`,
  },
});

const Pagination = ({
  indexOfCurrentSlide,
  setIndexOfCurrentSlide,
  slides,
}: {
  indexOfCurrentSlide: number;
  setIndexOfCurrentSlide: React.Dispatch<number>;
  slides: SlideProps[];
}) => {
  return (
    <Box component={'div'}>
      <ul
        style={{ display: 'flex', flexDirection: 'row', listStyle: 'none', margin: 0, padding: 0 }}
      >
        {slides.map((_, index: number) => {
          const isCurrent = index === indexOfCurrentSlide;
          return (
            <li key={`slide-${index}`}>
              <PaginationButton
                aria-current={isCurrent ? 'step' : undefined}
                aria-label={`Slide ${index + 1}`}
                onClick={() => setIndexOfCurrentSlide(index)}
              >
                <Box
                  component={'div'}
                  sx={{
                    backgroundColor: isCurrent ? Colors.Light7 : Colors.Light3,
                    borderRadius: '10px',
                    height: '10px',
                    width: '10px',
                  }}
                />
              </PaginationButton>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

const Subtitle = ({ text }: { text: string }) => {
  return (
    <Typography color={Colors.Blue8} fontWeight="400" variant="body1">
      {text}
    </Typography>
  );
};

const Title = ({ text }: { text: string }) => {
  return (
    <Typography color={Colors.Blue8} fontWeight="600" variant="subtitle1">
      {text}
    </Typography>
  );
};

type ImgProps = {
  src: string;
  height: string;
  width?: string;
};

const Img = ({ src, height = 'auto', width = 'auto' }: ImgProps) => {
  return <img alt="" src={src} style={{ height, width }} />;
};

type SlideShowProps = {
  slides: SlideProps[];
  handleClose: () => void;
};

export const SlideShow = ({ slides, handleClose }: SlideShowProps) => {
  const [indexOfCurrentSlide, setIndexOfCurrentSlide] = React.useState(0);
  const currentSlide = slides[indexOfCurrentSlide];
  const isLastSlide = indexOfCurrentSlide === slides.length - 1;
  const isFirstSlide = indexOfCurrentSlide === 0;
  const modalRef = React.useRef(null);

  // TODO: turn this into a hook!
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      //@ts-expect-error
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef, handleClose]);

  return (
    <div ref={modalRef}>
      <Stack
        sx={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '528px',
          paddingX: '24px',
        }}
      >
        <Title text={currentSlide.title} />
        <Subtitle text={currentSlide.subtitle} />
        <Box
          component={'div'}
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <Img
            src={currentSlide.image}
            height="auto"
            width={`${Math.min(currentSlide.width || 350, window.innerWidth * 0.8)}px`}
          />
        </Box>
        <Box component={'div'} sx={{ margin: '0 auto', width: 'fit-content' }}>
          <Pagination
            indexOfCurrentSlide={indexOfCurrentSlide}
            setIndexOfCurrentSlide={setIndexOfCurrentSlide}
            slides={slides}
          />
        </Box>
      </Stack>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        sx={{
          borderTop: `1px solid ${Colors.Borders.Divider}`,
          paddingBottom: '20px',
          paddingLeft: '16px',
          paddingRight: '24px',
          paddingTop: '20px',
          marginTop: '24px',
        }}
      >
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            if (isFirstSlide) {
              return;
            } else {
              setIndexOfCurrentSlide((prev) => prev - 1);
            }
          }}
          // disabled={isFirstSlide}
          sx={{
            backgroundColor: `${Colors.Blue8}`,
            '&:hover': {
              backgroundColor: `${Colors.Blue8}`,
            },
            '&:active': {
              backgroundColor: `${Colors.Blue8}`,
              boxShadow: 'none',
              transform: `scale(0.99)`,
            },
          }}
        >
          {'Back'}
        </Button>
        <Button
          size="small"
          variant="contained"
          sx={{
            backgroundColor: `${Colors.Blue8}`,
            '&:hover': {
              backgroundColor: `${Colors.Blue8}`,
            },
            '&:active': {
              backgroundColor: `${Colors.Blue8}`,
              boxShadow: 'none',
              transform: `scale(0.99)`,
            },
          }}
          onClick={() => {
            if (isLastSlide) {
              handleClose();
            } else {
              setIndexOfCurrentSlide((prev) => prev + 1);
            }
          }}
        >
          {isLastSlide ? 'Done' : 'Next'}
        </Button>
      </Stack>
    </div>
  );
};
