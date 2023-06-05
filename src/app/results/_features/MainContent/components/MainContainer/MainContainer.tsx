import { Box } from '@mui/material';
import React from 'react';

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <Box
      component='main'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        width: '100%',
        padding: '10px',
      }}
      flexGrow='1'
    >
      {children}
    </Box>
  );
};

export default MainContainer;
