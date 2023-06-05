'use client';

import { Box } from '@mui/material';
import React from 'react';
import useStyles from './CardContainer.useStyles';

interface CardContainerProps {
  children: React.ReactNode;
}

const CardContainer = ({ children }: CardContainerProps) => {
  const styles = useStyles();
  return <Box sx={styles.root}>{children}</Box>;
};

export default CardContainer;
