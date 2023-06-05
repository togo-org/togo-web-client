import { Typography } from '@mui/material';
import useStyles from './CounterLabel.useStyles';

interface CounterLabelProps {
  label: string;
}

const CounterLabel = ({ label }: CounterLabelProps) => {
  const styles = useStyles();
  return (
    <Typography component='p' sx={styles.root}>
      {label}
    </Typography>
  );
};

export default CounterLabel;
