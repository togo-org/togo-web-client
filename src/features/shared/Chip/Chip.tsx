import { Chip as MuiChip } from '@mui/material';
import ChipProps from './Chip.types';
import useStyles from './Chip.useStyles';

const Chip = ({ label }: ChipProps) => {
  const styles = useStyles();
  return <MuiChip label={label} sx={styles.root} />;
};

export default Chip;
