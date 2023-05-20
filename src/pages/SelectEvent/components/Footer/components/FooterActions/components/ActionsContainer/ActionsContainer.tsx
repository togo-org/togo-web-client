import { Box } from '@mui/material';
import React from 'react';

interface ActionsContainerProps {
  children: React.ReactNode;
}

const ActionsContainer = ({ children }: ActionsContainerProps) => {
  return <Box>{children}</Box>;
};

export default ActionsContainer;
