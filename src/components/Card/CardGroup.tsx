import React from 'react';
import { styled, css } from '@mui/system';

import { Modal, Button, Stack, Typography } from '@mui/material';
import { ItemCard } from './ItemCard.tsx';
import { ArtworkItemCardProps, BaseItemCardProps, ExperienceItemCardProps } from './types.ts';
import { CenteredFlexBox } from '../styled.ts';
import { Colors } from '@lib/constants/colors.ts';
import { SlideShow } from '../SlideShow/SlideShow.tsx';

export type CardGroupProps<T extends BaseItemCardProps> = {
  cards: T[];
};

/**
 * @ref https://stackoverflow.com/questions/72268450/generic-type-in-an-array-throws-cannot-find-name-t
 */
export const CardGroup = ({
  cards,
}: CardGroupProps<ExperienceItemCardProps | ArtworkItemCardProps>) => {
  const [open, setOpen] = React.useState(false);
  const [cardId, setCardId] = React.useState<string>('');
  const modalRef = React.useRef(null);
  const handleOpen = (cardId: string) => {
    setOpen(true);
    setCardId(cardId);
  };

  const handleClose = React.useCallback(() => setOpen(false), []);

  const slides = cards.find((item) => item.id === cardId)?.slides || undefined;

  React.useEffect(() => {
    //@ts-ignore
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
    <>
      <CenteredFlexBox
        key={'card-group'}
        sx={{ flexWrap: 'wrap', gap: 3, alignContent: 'center', mt: '15vh' }}
      >
        {cards.map((card) => (
          <React.Fragment key={card.id}>
            {/* wrap the handleOpen inside an arr func to prevent immediate execution */}
            {/* adjust the onclick event to be a func called w. proper arg */}
            <ItemCard key={card.id} cardProps={card} handleOpen={() => handleOpen(card.id)} />
          </React.Fragment>
        ))}
        <Modal key={`${cardId}-modal`} open={open} onClose={handleClose}>
          <CenteredFlexBox key={`${cardId}-modal-div`} sx={{ height: '100%' }}>
            <ModalContent
              ref={modalRef}
              key={`${cardId}-modal-content`}
              sx={{
                height: 700,
                width: { xs: '90vw', sm: '90vw', md: '600px' },
                pl: '1vw',
                pr: '1vw',
              }}
            >
              {slides ? (
                <SlideShow key={`${cardId}-slideshow`} slides={slides} handleClose={handleClose} />
              ) : (
                <Stack
                  key={`${cardId}-modal-stack`}
                  sx={{
                    alignContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    mt: '300px',
                  }}
                  gap={2}
                >
                  <Typography color={Colors.Blue8}>UNDER CONSTRUCTION</Typography>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      width: '50px',
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
                    onClick={handleClose}
                  >
                    {'Close'}
                  </Button>
                </Stack>
              )}
            </ModalContent>
          </CenteredFlexBox>
        </Modal>
      </CenteredFlexBox>
    </>
  );
};

const ModalContent = styled('div')(
  () => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${Colors.Light1};
    border-radius: 8px;
    box-shadow: 0 4px 12px rgb(0 0 0 / 0.2);
    padding: 24px;
    color: ${Colors.Blue8};
    border-color: ${Colors.Blue8} & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${Colors.Blue8};
      margin-bottom: 4px;
    }
  `,
);
