'use client';

import { Typography } from '@mui/material';
import useStyles from './CardLabel.useStyles';

interface CardLabelProps {
  label: string;
}

const CardLabel = ({ label }: CardLabelProps) => {
  const styles = useStyles();
  return <Typography sx={styles.root}>{label}</Typography>;
};

export default CardLabel;
