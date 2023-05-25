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
      color: theme.palette.primary.main,
      width: '80px',
      height: '40px',
      '&:hover': {
        backgroundColor: grey.white,
        color: theme.palette.primary.main,
      },
    },

    selected: {
      backgroundColor: theme.palette.primary.main,
      color: grey.white,
      width: 'fit-content',
      height: '60px',
    },
  };
};

export default useStyles;
