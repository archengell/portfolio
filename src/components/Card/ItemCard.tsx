import React from 'react';
import { Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material';
import { BaseItemCardProps } from './types.ts';
import { Colors } from '@lib/constants/colors.ts';

type ItemCardProps<T> = {
  cardProps: T;
  handleOpen: (id: string) => void;
};

export const ItemCard = <T extends BaseItemCardProps = BaseItemCardProps>({
  cardProps,
  handleOpen,
}: ItemCardProps<T>) => {
  return (
    <Card
      elevation={2}
      sx={{
        boxShadow: `${Colors.Clear}`,
        '&:hover': {
          boxShadow: `0 0 20px`,
          color: Colors.Blue8,
        },
        borderRadius: 5,
        width: '400px',
        height: '300px',
      }}
      onClick={() => handleOpen(cardProps.id)}
    >
      <CardActionArea sx={{ backgroundColor: `${Colors.Clear}`, color: `${Colors.Clear}` }}>
        <CardMedia
          component="img"
          height="170"
          image={cardProps.imgPath}
          alt={cardProps.imgAlt}
          sx={{ borderColor: `${Colors.Clear}`, objectFit: 'contain', overflow: 'clip' }}
        />
        <CardContent sx={{ borderColor: `${Colors.Clear}` }}>
          <Typography gutterBottom variant="h6" component="div" color={Colors.Blue8}>
            {cardProps.title}
          </Typography>
          <Typography variant="body2" color={Colors.Blue8}>
            {cardProps.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
