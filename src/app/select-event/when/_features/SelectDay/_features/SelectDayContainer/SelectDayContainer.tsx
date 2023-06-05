import { Box } from '@mui/material';
import React from 'react';
import useStyles from './SelectDayContainer.useStyles';

interface SelectDayContainerProps {
  children: React.ReactNode;
}

const SelectDayContainer = ({ children }: SelectDayContainerProps) => {
  const styles = useStyles();
  return <Box sx={styles.root}>{children}</Box>;
};

export default SelectDayContainer;
