import { Box } from '@mui/material';
import useStyles from './Dot.useStyles';

interface DotProps {
  isFilled: boolean;
}

const Dot = ({ isFilled }: DotProps) => {
  const styles = useStyles();
  return (
    <Box
      sx={{ ...styles.root, ...(isFilled ? styles.filled : styles.default) }}
    />
  );
};

export default Dot;
