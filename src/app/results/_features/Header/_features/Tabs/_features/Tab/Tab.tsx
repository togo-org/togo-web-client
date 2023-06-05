'use client';

import { Box, Typography } from '@mui/material';
import useStyles from './Tab.useStyles';

interface TabProps {
  label: string;
  value: string;
}

const Tab = ({ label, value }: TabProps) => {
  const styles = useStyles();
  return (
    <Box sx={styles.root}>
      <Typography sx={styles.label}>{label}</Typography>
      <Typography sx={styles.value}>{value}</Typography>
    </Box>
  );
};

export default Tab;
