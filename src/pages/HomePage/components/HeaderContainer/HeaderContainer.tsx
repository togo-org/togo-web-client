import { Box } from '@mui/material';
import React from 'react';
import useStyles from './HeaderContainer.useStyles';
interface HeaderContainerProps {
  children: React.ReactNode;
}

const HeaderContainer = ({ children }: HeaderContainerProps) => {
  const styles = useStyles();
  return <Box sx={styles.root}>{children}</Box>;
};

export default HeaderContainer;
