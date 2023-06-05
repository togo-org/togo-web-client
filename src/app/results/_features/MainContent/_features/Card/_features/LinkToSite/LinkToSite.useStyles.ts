import colors from '@/theme/colors';
import { useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  const { grey } = colors;
  return {
    root: {
      color: theme.palette.primary.main,
      backgroundColor: grey.white,
      padding: '4px 20px',
      margin: 'auto',
      '&:hover': {
        backgroundColor: grey.white,
      },
    },
  };
};

export default useStyles;
