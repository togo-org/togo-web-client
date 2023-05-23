import { Box } from '@mui/material';
import React from 'react';
import Button from '@/shared/Button';
import IMAGES from '@/utils/constants/IMAGES';
import useStyles from './HeroContainer.useStyles';
import Header from './components/Header';
import Icon from './components/IconContainer';
import BgImage from '../BgImage';


const HeroContainer = () => {
  const styles = useStyles();
  return (
    <Box sx={styles.root}>
      <Icon />
      <Header />
      <Button label='לחיפוש מותאם אישית' shape='pill' />
       <BgImage  src={IMAGES.HeroContainerBgImage} alt='man' />
    </Box>
  );
};

export default HeroContainer;
