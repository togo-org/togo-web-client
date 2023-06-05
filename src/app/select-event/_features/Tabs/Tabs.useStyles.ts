import colors from '@/theme/colors';
import getShadow from '@/theme/shadows';
import { useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  const { grey } = colors;
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.primary.light,
      borderRadius: '10px',
    },

    selectedTab: {
      backgroundColor: theme.palette.primary.main,
      color: grey.white,
      fontWeight: 'bold',
      ...getShadow('large'),
    },

    notSelectedTab: {
      backgroundColor: theme.palette.primary.light,
      color: grey.black,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        color: grey.black,
      },
    },
  };
};

export default useStyles;
