import colors from '@/theme/colors';
import { useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  const { grey } = colors;
  return {
    root: {
      zIndex: 1,
      padding: '0.1rem 1rem',
      backgroundColor: grey.white,
      color: theme.palette.primary.main,
    },
  };
};

export default useStyles;
