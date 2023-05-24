import colors from '@/theme/colors';
import { useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  const { grey } = colors;
  return {
    root: {
      fontFamily: 'Rubik',
      borderRadius: '10px',
      padding: '10px 20px',
    },

    notSelected: {
      backgroundColor: grey.white,
      color: theme.palette.primary.main,
    },

    selected: {
      backgroundColor: theme.palette.primary.main,
      color: grey.white,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
};

export default useStyles;
