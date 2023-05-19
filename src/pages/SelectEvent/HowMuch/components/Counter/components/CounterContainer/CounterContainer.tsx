import useStyles from '@/pages/SelectEvent/HowMuch/components/Counter/components/CounterContainer/CounterContainer.useStyles';
import { Box } from '@mui/material';
import React from 'react';

interface CounterContainerProps {
  children: React.ReactNode;
}

const CounterContainer = ({ children }: CounterContainerProps) => {
  const styles = useStyles();

  return <Box sx={styles.root}>{children}</Box>;
};

export default CounterContainer;
