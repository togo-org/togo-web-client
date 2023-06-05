'use client';

import ICONS from '@/utils/constants/ICONS';
import { Box } from '@mui/material';
import React from 'react';
import IconPresentation from './IconPresentation';
import useStyles from './IconsSection.useStyles';

const IconsSection = () => {
  const styles = useStyles();
  return (
    <Box sx={styles.root}>
      {Object.entries(ICONS).map(([key, value]) => (
        <IconPresentation key={key} name={key} icon={value} />
      ))}
    </Box>
  );
};

export default IconsSection;
