import { Box } from '@mui/material';
import React from 'react';
import useStyles from './ButtonContainer.useStyles';

interface ButtonsContainerProps {
  children: React.ReactNode;
}

const ButtonsContainer = ({ children }: ButtonsContainerProps) => {
  const styles = useStyles();
  return <Box sx={styles.root}>{children}</Box>;
};

export default ButtonsContainer;
