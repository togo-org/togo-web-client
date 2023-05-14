import CardProps from '@/shared/Card/Card.types';
import useStyles from '@/shared/Card/Card.useStyles';
import Chip from '@/shared/Chip';
import { Box, Card as MuiCard, Typography } from '@mui/material';
import Image from 'next/image';

const Card = ({ src, alt }: CardProps) => {
  const styles = useStyles();
  return (
    <MuiCard variant='outlined' sx={styles.root}>
      <Image src={src} alt={alt} />
      <Box sx={styles.chipContainer}>
        <Chip label='אוכל אסייאתי' />
        <Chip label='סושי' />
      </Box>
      <Box sx={styles.cardFooterHead}>
        <Typography variant='h6' sx={styles.h2}>
          זוזוברה
        </Typography>
      </Box>
      <Box sx={styles.cardFooterBody}>
      <Typography component='p' sx={styles.pBold}>
          1.2 ק״מ
        </Typography>
        <Typography component='p' sx={styles.p}>
            אריה שנקר 6 הרצליה
        </Typography>
      </Box>
    </MuiCard>
  );
};

export default Card;
