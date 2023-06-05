'use client';

import { Typography } from '@mui/material';
import useStyles from './NotFindResultsLabel.useStyles';

interface NotFindResultsLabelProps {
  label: string;
}

const NotFindResultsLabel = ({ label }: NotFindResultsLabelProps) => {
  const styles = useStyles();
  return <Typography sx={styles.root}>{label}</Typography>;
};

export default NotFindResultsLabel;
