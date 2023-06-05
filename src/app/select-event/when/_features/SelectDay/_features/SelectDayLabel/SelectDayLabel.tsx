import { Typography } from '@mui/material';
import useStyles from './SelectDayLabel.useStyles';

interface SelectDayLabelProps {
  label: string;
}

const SelectDayLabel = ({ label }: SelectDayLabelProps) => {
  const styles = useStyles();
  return (
    <Typography component='p' sx={styles.root}>
      {label}
    </Typography>
  );
};

export default SelectDayLabel;
