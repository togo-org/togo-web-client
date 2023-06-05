import useStyles from '@/pages/ResultsPage/components/Header/components/Tabs/components/TabsContainer/TabsContainer.useStyles';
import { Box } from '@mui/material';
import React from 'react';

interface TabsContainerProps {
  children: React.ReactNode;
}

const TabsContainer = ({ children }: TabsContainerProps) => {
  const styles = useStyles();
  return <Box sx={styles.root}>{children}</Box>;
};

export default TabsContainer;
