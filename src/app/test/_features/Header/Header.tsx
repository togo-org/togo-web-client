'use client';

import { Typography } from '@mui/material';
import React from 'react';
import useStyles from './Header.useStyles';

const Header = () => {
  const styles = useStyles();
  return (
    <Typography variant='h1' sx={styles.root}>
      Components Test
    </Typography>
  );
};

export default Header;
