import { EventInterface } from '@/types';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface CardProps {
  event: EventInterface;
}

const Card = ({ event }: CardProps) => {
  const { name, address, image } = event;
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
      <Box>
        <Box
          sx={{
            display: 'flex',
            gap: '4px',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'flex-start',
          }}
        >
          <Typography>{name}</Typography>
        </Box>
        <Box>
          <Typography>{address}</Typography>
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
