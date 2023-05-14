import CardProps from '@/shared/Card/Card.types';
import useStyles from '@/shared/Card/Card.useStyles';
import Image from 'next/image';
import {Box, Typography} from '@mui/material';
import {  Card as MuiCard} from '@mui/material';
import Chip from '@shared/Chip';
const Card = ({ src,alt }: CardProps) => {
    const styles = useStyles();
    return (
      <MuiCard
      variant="outlined"
      sx={styles.root}
      >
        
        <Image src={src} alt={alt}>
        
        </Image>
        <Box sx={styles.chipContainer}>
        <Chip label='אוכל אסייאתי'/>
        <Chip label='סושי'/>
        </Box>
        <Box sx={styles.cardFooter}>
        <Typography variant='h6'  sx={styles.h2}>זוזוברה</Typography>
        <Box sx={styles.cardFooter}>

        </Box>
        </Box>
      </MuiCard>
    );
  };
  
  export default Card;