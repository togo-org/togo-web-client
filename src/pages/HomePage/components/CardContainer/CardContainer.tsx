import { Box, Typography } from '@mui/material';
import useStyles from '@/pages/HomePage/components/CardContainer/CardContainer.useStyles';
import React from 'react';
import Icon from '@/shared/Icon';
import ICONS from '@/utils/constants/ICONS';
import Card from '@/shared/Card';
import IMAGES from '@/utils/constants/IMAGES';
import mockData from '@/data/mockData';

function getDataByCategory(type: string) {
  return mockData.filter((item) => item.category === type);
}
interface CardContainerProps {
  type: 'resturant' | 'attraction' | 'trip';
}
function selectType(type : string) {
  switch (type) {
      case 'resturant':{
          return 'מסעדות'
      }
      case 'attraction':{
          return 'אטרקציות'

  }
      case 'trip':{
          return 'טיולים'

} default :{
    return 'default'
}

}}






const CardContainer = ({type} : CardContainerProps) => {
  const styles = useStyles();
  
  
  
  
  
  return (
    <Box sx={styles.root}>
      <Box sx={styles.header}>
        <Typography>{selectType(type)}</Typography>
        <Icon src={ICONS.KnifeAndFork} size='m' alt='close' />
      </Box>
      <Box sx={styles.cardContainer}>
        {getDataByCategory(type).map((item) => {
          console.log(getDataByCategory('restaurant'));
          return (
            <Card key={item.id} src={IMAGES.CardRestaurant} alt={item.name} />
          );
        })}
      </Box>
    </Box>
  );
};
export default CardContainer;
