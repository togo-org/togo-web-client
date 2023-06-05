'use client';

import { Typography } from '@mui/material';
import useStyles from './Title.useStyles';

const Title = () => {
  const styles = useStyles();
  return (
    <Typography variant='h1' sx={styles.root}>
      טוגו
    </Typography>
  );
};

export default Title;
