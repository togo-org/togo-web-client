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
      flex: 'none',
    },

    notSelected: {
      backgroundColor: grey.white,
      color: theme.palette.secondary.dark,
      width: '80px',
      height: '40px',
      '&:hover': {
        backgroundColor: grey.white,
        color: theme.palette.secondary.dark,
      },
    },

    selected: {
      backgroundColor: theme.palette.secondary.dark,
      color: grey.white,
      width: 'fit-content',
      height: '60px',
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        color: grey.white,
      },
    },
  };
};

export default useStyles;
