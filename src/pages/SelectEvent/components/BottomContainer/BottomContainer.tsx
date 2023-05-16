import { Box } from '@mui/material';
import React from 'react';

interface BottomContainerProps {
  children: React.ReactNode;
}

const BottomContainer = ({ children }: BottomContainerProps) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        paddingBottom: '20px',
      }}
    >
      {children}
    </Box>
  );
};

export default BottomContainer;
