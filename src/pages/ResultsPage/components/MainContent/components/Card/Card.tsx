import { EventInterface } from '@/types';
import { Box } from '@mui/material';

interface CardProps {
  event: EventInterface;
}

const Card = ({ event }: CardProps) => {
  const { name, category, address, distance, image } = event;
  return (
    <Box>
      <Box>{name}</Box>
      <Box>{category}</Box>
      <Box>{address}</Box>
      <Box>{distance}</Box>
      <Box>{image}</Box>
    </Box>
  );
};

export default Card;
