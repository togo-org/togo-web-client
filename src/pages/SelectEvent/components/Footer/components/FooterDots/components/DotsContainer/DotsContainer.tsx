import { Box } from '@mui/material';
import React from 'react';

interface DotsContainerProps {
  children: React.ReactNode;
}

const DotsContainer = ({ children }: DotsContainerProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        direction: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      {children}
    </Box>
  );
};

export default DotsContainer;
