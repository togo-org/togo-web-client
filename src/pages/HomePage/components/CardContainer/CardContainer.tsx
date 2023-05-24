import mockData from '@/data/mockData';
import useStyles from '@/pages/HomePage/components/CardContainer/CardContainer.useStyles';
import Card from '@/pages/HomePage/components/CardContainer/components/Card/Card';
import Icon from '@/shared/Icon';
import ICONS from '@/utils/constants/ICONS';
import { Box, Typography } from '@mui/material';
import React from 'react';

function getDataByCategory(type: string) {
  return mockData.filter((item) => item.category === type);
}
interface CardContainerProps {
  type: 'restaurant' | 'attraction' | 'trip';
}
function selectType(type: string) {
  switch (type) {
    case 'restaurant': {
      return 'מסעדות';
    }
    case 'attraction': {
      return 'אטרקציות';
    }
    case 'trip': {
      return 'טיולים';
    }
    default: {
      return 'default';
    }
  }
}

const CardContainer = ({ type }: CardContainerProps) => {
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
            <Card key={item.id} event={item}  />
          );
        })}
      </Box>
    </Box>
  );
};
export default CardContainer;
