import useStyles from '@/pages/SelectEvent/HowMuch/components/Counter/components/CounterLabel/CounterLabel.useStyles';
import { Typography } from '@mui/material';

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
