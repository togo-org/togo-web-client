import { Box, Typography } from '@mui/material';
import useStyles from '@/pages/HomePage/components/CardContainer/CardContainer.useStyles';
import React from 'react';
import Icon from '@/shared/Icon';
import ICONS from '@/utils/constants/ICONS';
import Card from '@/shared/Card';
import IMAGES from '@/utils/constants/IMAGES';

const CardContainer = () => {
  const styles = useStyles();
  return (
    <Box sx={styles.root}>
      <Box sx={styles.header}>
        <Typography>מסעדות</Typography>
        <Icon src={ICONS.KnifeAndFork} size='m' alt='close' />
      </Box>
      <Box>
        <Card src={IMAGES.CardRestaurant} alt='food' />
      </Box>
    </Box>
  );
};
export default CardContainer;
