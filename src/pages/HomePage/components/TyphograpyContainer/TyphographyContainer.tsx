import { Box } from '@mui/material';
import React from 'react';
import useStyles from './Typhography.useStyles';

interface TyphographyContainerProps {
  children: React.ReactNode;
}

const TyphographyContainer = ({children} : TyphographyContainerProps) => {
  const styles = useStyles();
  return <Box sx={styles.root}>{children}</Box>;
};

export default TyphographyContainer;
