import { Box } from '@mui/material';
import React from 'react';

interface BottomContainerProps {
  children: React.ReactNode;
}

const BottomContainer = ({ children }: BottomContainerProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'fit-content',
        padding: '10px',
      }}
    >
      {children}
    </Box>
  );
};

export default BottomContainer;
