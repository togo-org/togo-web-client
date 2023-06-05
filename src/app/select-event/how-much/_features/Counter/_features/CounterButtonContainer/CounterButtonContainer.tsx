import { Box } from '@mui/material';
import React from 'react';
import useStyles from './CounterButtonContainer.useStyles';

interface CounterButtonContainerProps {
  children: React.ReactNode;
}

const CounterButtonContainer = ({ children }: CounterButtonContainerProps) => {
  const styles = useStyles();
  return <Box sx={styles.root}>{children}</Box>;
};

export default CounterButtonContainer;
