import { Box } from '@mui/material';
import React from 'react';

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return <Box component='main'>{children}</Box>;
};

export default MainContainer;
