import useStyles from '@/pages/SelectEvent/components/Footer/components/FooterDots/components/Dot/Dot.useStyles';
import { Box } from '@mui/material';

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
