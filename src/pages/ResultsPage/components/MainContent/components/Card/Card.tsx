import { EventInterface } from '@/types';
import { useGetDistanceBetweenUserAndEvent } from '@/utils/hooks';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface CardProps {
  event: EventInterface;
}

const Card = ({ event }: CardProps) => {
  const distance = useGetDistanceBetweenUserAndEvent(event);
  const { name, address, image, city } = event;

  const getRoundToSingleDecimalPlace = (num: number): number => {
    return Number(num.toFixed(1));
  };

  const getFormattedDistance = (d: number) => {
    const roundedDistance = getRoundToSingleDecimalPlace(d);
    const units = 'ק״מ';
    return `${roundedDistance} ${units}`;
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        color: 'white',
        fontWeight: 'bold',
        flex: 1,
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          padding: '10px 22px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '8px',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Rubik',
              fontWeight: '700',
              fontSize: '22px',
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Rubik',
              fontWeight: '700',
              fontSize: '1rem',
            }}
          >
            {getFormattedDistance(distance)}
          </Typography>
        </Box>
        <Box>
          <Typography>
            <Typography component='span'>{address}</Typography>
            <Typography component='span'>, </Typography>
            <Typography component='span'>{city}</Typography>
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <Image
          src={image}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '10px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            zIndex: -2,
          }}
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.418)',
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default Card;
