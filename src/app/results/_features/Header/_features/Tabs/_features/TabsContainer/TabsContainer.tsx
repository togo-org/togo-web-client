import { Box } from '@mui/material';
import React from 'react';
import useStyles from './TabsContainer.useStyles';

interface TabsContainerProps {
  children: React.ReactNode;
}

const TabsContainer = ({ children }: TabsContainerProps) => {
  const styles = useStyles();
  return <Box sx={styles.root}>{children}</Box>;
};

export default TabsContainer;
