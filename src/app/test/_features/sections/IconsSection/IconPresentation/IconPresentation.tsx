'use client';

import Icon from '@/features/shared/Icon';
import { Box, Typography } from '@mui/material';
import React from 'react';
import useStyles from './IconPresentation.useStyles';

interface IconPresentationProps {
  icon: string;
  name: string;
}

const IconPresentation = ({ icon, name }: IconPresentationProps) => {
  const styles = useStyles();
  return (
    <Box sx={styles.root}>
      <Typography variant='body1'>{name}</Typography>
      <Icon src={icon} size='xl' alt={name} />
    </Box>
  );
};

export default IconPresentation;
