import useStyles from '@/pages/SelectEvent/components/PageWrapper/PageWrapper.useStyles';
import { Box } from '@mui/material';
import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const styles = useStyles();
  return <Box sx={styles.root}>{children}</Box>;
};

export default PageWrapper;
