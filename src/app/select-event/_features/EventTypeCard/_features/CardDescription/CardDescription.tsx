'use client';

import { Typography } from '@mui/material';
import useStyles from './CardDescription.useStyles';

interface CardDescriptionProps {
  description: string;
}

const CardDescription = ({ description }: CardDescriptionProps) => {
  const styles = useStyles();
  return (
    <Typography component='p' sx={styles.root}>
      {description}
    </Typography>
  );
};

export default CardDescription;
