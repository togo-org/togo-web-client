'use client';

import { Card } from '@mui/material';
import React from 'react';
import useStyles from './CardContainer.useStyles';

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
