'use client';

import BgImage from '@/features/shared/BgImage';
import IMAGES from '@/utils/constants/IMAGES';
import { Box } from '@mui/material';
import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
      }}
    >
      {children}
      <BgImage src={IMAGES.BgImage} alt='background image' />
    </Box>
  );
};

export default PageWrapper;
