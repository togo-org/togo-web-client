import useStyles from '@/pages/SelectEvent/components/EventTypeCard/components/CardContainer/CardContainer.useStyles';
import { Card } from '@mui/material';
import React from 'react';

interface CardContainerProps {
  children: React.ReactNode;
}

const CardContainer = ({ children }: CardContainerProps) => {
  const styles = useStyles();
  return <Card sx={styles.root}>{children}</Card>;
};

export default CardContainer;
