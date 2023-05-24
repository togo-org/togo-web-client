import CardProps from '@/pages/HomePage/components/CardContainer/components/Card/Card.types';
import useStyles from '@/pages/HomePage/components/CardContainer/components/Card/Card.useStyles';
import Chip from '@/shared/Chip';
import { useGetDistanceBetweenUserAndEvent } from '@/utils/hooks';
import { Box, Card as MuiCard, Typography } from '@mui/material';
import Image from 'next/image';

const getRoundToSingleDecimalPlace = (num: number): number => {
  return Number(num.toFixed(1));
};

const getFormattedDistance = (d: number) => {
  const roundedDistance = getRoundToSingleDecimalPlace(d);
  const units = 'ק״מ';
  return `${roundedDistance} ${units}`;}









const Card = ({ event }: CardProps) => {
  const distance = useGetDistanceBetweenUserAndEvent(event);
  const { name, address, city, image, tags } = event; // TODO: handle link
  const styles = useStyles();
  console.log(distance, 'print this');
 
  return (
    <MuiCard variant='outlined' sx={styles.root}>
      <Image src={image} alt={name} width={200} height={100}/>
      <Box sx={styles.chipContainer}>
        <Chip label={tags[0]} />
        <Chip label={tags[1]} />
      </Box>
      <Box sx={styles.cardFooterHead}>
        <Typography variant='h6' sx={styles.h2}>
          {name}
        </Typography>
      </Box>
      <Box sx={styles.cardFooterBody}>
        <Typography component='p' sx={styles.pBold}>
          {getFormattedDistance(distance)}
        </Typography>
        <Typography component='p' sx={styles.p}>
          {address}
          {city}
        </Typography>
      </Box>
    </MuiCard>
  );
};

export default Card;
