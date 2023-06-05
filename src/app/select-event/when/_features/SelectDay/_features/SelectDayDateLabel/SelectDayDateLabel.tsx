import { Typography } from '@mui/material';
import useStyles from './SelectDayDateLabel.useStyles';

interface SelectDayDateLabelProps {
  dateLabel: string;
}

const SelectDayDateLabel = ({ dateLabel }: SelectDayDateLabelProps) => {
  const styles = useStyles();
  return (
    <Typography component='p' sx={styles.root}>
      {dateLabel}
    </Typography>
  );
};

export default SelectDayDateLabel;
