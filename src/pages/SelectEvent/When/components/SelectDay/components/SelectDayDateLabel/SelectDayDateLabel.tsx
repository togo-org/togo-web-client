import useStyles from '@/pages/SelectEvent/When/components/SelectDay/components/SelectDayDateLabel/SelectDayDateLabel.useStyles';
import { Typography } from '@mui/material';

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
