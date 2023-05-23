import { Box } from '@mui/material';
import React from 'react';

interface ActionsContainerProps {
  children: React.ReactNode;
}

const ActionsContainer = ({ children }: ActionsContainerProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '0 47px',
      }}
    >
      {children}
    </Box>
  );
};

export default ActionsContainer;
