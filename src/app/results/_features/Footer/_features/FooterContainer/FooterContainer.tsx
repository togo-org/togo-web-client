'use client';

import { Box } from '@mui/material';
import useStyles from './FooterContainer.useStyles';

interface FooterContainerProps {
  children: React.ReactNode;
}

const FooterContainer = ({ children }: FooterContainerProps) => {
  const styles = useStyles();
  return (
    <Box component='footer' sx={styles.root}>
      {children}
    </Box>
  );
};

export default FooterContainer;
