import useStyles from '@/pages/SelectEvent/HowMuch/components/Counter/components/CounterButtonContainer/CounterButtonContainer.useStyles';
import { Box } from '@mui/material';
import React from 'react';

interface CounterButtonContainerProps {
  children: React.ReactNode;
}

const CounterButtonContainer = ({ children }: CounterButtonContainerProps) => {
  const styles = useStyles();
  return <Box sx={styles.root}>{children}</Box>;
};

export default CounterButtonContainer;
