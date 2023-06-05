import { Box } from '@mui/material';
import React from 'react';
import useStyles from './PageContainer.useStyles';

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  const styles = useStyles();
  return (
    <Box component='main' sx={styles.root}>
      {children}
    </Box>
  );
};

export default PageContainer;
