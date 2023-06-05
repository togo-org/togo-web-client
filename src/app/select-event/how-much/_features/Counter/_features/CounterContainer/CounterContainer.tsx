import { Box } from '@mui/material';
import React from 'react';
import useStyles from './CounterContainer.useStyles';

interface CounterContainerProps {
  children: React.ReactNode;
}

const CounterContainer = ({ children }: CounterContainerProps) => {
  const styles = useStyles();

  return <Box sx={styles.root}>{children}</Box>;
};

export default CounterContainer;
