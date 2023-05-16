import { Box } from '@mui/material';
import React from 'react';

interface HeaderContainerProps {
  children: React.ReactNode;
}

const HeaderContainer = ({ children }: HeaderContainerProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        top: '20px',
        flexGrow: 1,
      }}
    >
      {children}
    </Box>
  );
};

export default HeaderContainer;
