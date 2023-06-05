'use client';

import { Box } from '@mui/material';
import React from 'react';
import useStyles from './TitlesContainer.useStyles';

interface TitlesContainerProps {
  children: React.ReactNode;
}

const TitlesContainer = ({ children }: TitlesContainerProps) => {
  const styles = useStyles();
  return <Box sx={styles.root}>{children}</Box>;
};

export default TitlesContainer;
