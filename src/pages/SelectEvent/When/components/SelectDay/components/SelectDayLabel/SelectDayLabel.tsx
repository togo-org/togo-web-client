import useStyles from '@/pages/SelectEvent/When/components/SelectDay/components/SelectDayLabel/SelectDayLabel.useStyles';
import { Typography } from '@mui/material';

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
