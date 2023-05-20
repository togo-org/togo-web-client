import { Box } from '@mui/material';
import React from 'react';

interface DotsContainerProps {
  children: React.ReactNode;
}

const DotsContainer = ({ children }: DotsContainerProps) => {
  return <Box>{children}</Box>;
};

export default DotsContainer;
