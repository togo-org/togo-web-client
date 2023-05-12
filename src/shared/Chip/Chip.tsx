import ChipProps from '@/shared/Chip/Chip.types';
import useStyles from '@/shared/Chip/Chip.useStyles';
import { Chip as MuiChip } from '@mui/material';

const Chip = ({ label }: ChipProps) => {
  const styles = useStyles();
  return (
    <MuiChip
      label={label}
      sx={styles.root}
    />
  );
};

export default Chip;
