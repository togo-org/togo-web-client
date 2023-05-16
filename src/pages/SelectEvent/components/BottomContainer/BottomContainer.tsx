import { Box } from '@mui/material';
import React from 'react';

interface BottomContainerProps {
  children: React.ReactNode;
}

const BottomContainer = ({ children }: BottomContainerProps) => {
  return <Box>{children}</Box>;
};

export default BottomContainer;
