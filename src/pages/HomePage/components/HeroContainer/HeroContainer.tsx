import { Box } from '@mui/material';
import React from 'react';
import Button from '@/shared/Button';
import useStyles from './HeroContainer.useStyles';
import Header from './components/Header';
import Icon from './components/IconContainer';

const HeroContainer = () => {
  const styles = useStyles();
  return (
    <Box sx={styles.root}>
      <Icon />
      <Header />
      <Button label='לחיפוש מותאם אישית' shape='pill'/>
    </Box>
  );
};

export default HeroContainer;
