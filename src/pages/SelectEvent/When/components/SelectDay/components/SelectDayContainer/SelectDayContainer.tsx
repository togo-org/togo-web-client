import useStyles from '@/pages/SelectEvent/When/components/SelectDay/components/SelectDayContainer/SelectDayContainer.useStyles';
import { Box } from '@mui/material';
import React from 'react';

interface SelectDayContainerProps {
  children: React.ReactNode;
}

const SelectDayContainer = ({ children }: SelectDayContainerProps) => {
  const styles = useStyles();
  return <Box sx={styles.root}>{children}</Box>;
};

export default SelectDayContainer;
