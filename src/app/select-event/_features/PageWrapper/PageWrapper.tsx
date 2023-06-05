'use client';

import { Box } from '@mui/material';
import React from 'react';
import useStyles from './PageWrapper.useStyles';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const styles = useStyles();
  return <Box sx={styles.root}>{children}</Box>;
};

export default PageWrapper;
