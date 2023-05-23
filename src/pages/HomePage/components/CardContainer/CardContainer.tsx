import mockData from '@/data/mockData';
import useStyles from '@/pages/HomePage/components/CardContainer/CardContainer.useStyles';
import Card from '@/shared/Card';
import Icon from '@/shared/Icon';
import ICONS from '@/utils/constants/ICONS';
import IMAGES from '@/utils/constants/IMAGES';
import { Box, Typography } from '@mui/material';
import React from 'react';

function getDataByCategory(type: string) {
  return mockData.filter((item) => item.category === type);
}

const CardContainer = () => {
  const styles = useStyles();
  return (
    <Box sx={styles.root}>
      <Box sx={styles.header}>
        <Typography>מסעדות</Typography>
        <Icon src={ICONS.KnifeAndFork} size='m' alt='close' />
      </Box>
      <Box sx={styles.card}>
        {getDataByCategory('resturant').map((item) => {
          return (
            <Card key={item.id} src={IMAGES.CardRestaurant} alt={item.name} />
          );
        })}
      </Box>
    </Box>
  );
};
export default CardContainer;
