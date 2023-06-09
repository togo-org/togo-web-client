import useStyles from '@/pages/SelectEvent/components/EventTypeCard/components/CardContainer/CardContainer.useStyles';
import { Card } from '@mui/material';
import React from 'react';

interface CardContainerProps {
  children: React.ReactNode;
  onClick: () => void;
}

const CardContainer = ({ children, onClick }: CardContainerProps) => {
  const styles = useStyles();
  return (
    <Card sx={styles.root} onClick={onClick}>
      {children}
    </Card>
  );
};

export default CardContainer;
