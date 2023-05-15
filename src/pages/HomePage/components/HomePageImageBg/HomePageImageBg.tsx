import { Box } from '@mui/material';
import Image from 'next/image';
import useStyles from './HomePageImageBg.useStyles';
import HomePageBg from '@/assets/images/home-page-bg.png';

const HomePageImageBg = () => {
  const styles = useStyles();
  return (
    <Box sx={styles.root}>
    
    </Box>
  );
};

export default HomePageImageBg;
