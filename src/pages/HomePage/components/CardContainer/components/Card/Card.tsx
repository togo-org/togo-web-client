import CardProps from '@/pages/HomePage/components/CardContainer/components/Card/Card.types';
import useStyles from '@/pages/HomePage/components/CardContainer/components/Card/Card.useStyles';
import Chip from '@/shared/Chip';
import { useGetDistanceBetweenUserAndEvent } from '@/utils/hooks';
import { Box, Card as MuiCard, Typography } from '@mui/material';
import Image from 'next/image';

const Card = ({ event }: CardProps) => {
  const distance = useGetDistanceBetweenUserAndEvent(event);
  const { name, address, city, image } = event; // TODO: handle link
  const styles = useStyles();
  console.log(image, 'print this');
 
  return (
    <MuiCard variant='outlined' sx={styles.root}>
      <Image src={image?.src} alt={name} width={100} height={100}/>
      <Box sx={styles.chipContainer}>
        <Chip label='אוכל אסייאתי' />
        <Chip label='סושי' />
      </Box>
      <Box sx={styles.cardFooterHead}>
        <Typography variant='h6' sx={styles.h2}>
          {name}
        </Typography>
      </Box>
      <Box sx={styles.cardFooterBody}>
        <Typography component='p' sx={styles.pBold}>
          {distance}
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
