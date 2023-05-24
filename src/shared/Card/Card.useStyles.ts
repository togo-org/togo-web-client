import colors from '@/theme/colors';
import '@fontsource/rubik';
import { useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flex: 'none',
      color: colors.grey.black,
      backgroundColor: colors.grey.white,
      fontFamily: 'rubik',
      fontSize: '1.16rem',
      borderRadius: '15px',
      width: '40%',
      height: 'fit-content',
      gap: '1px',
    },
    chipContainer: {
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'baseline',
      gap: '3px',
      padding: '3px',
     

    },
    h2: {
      color: colors.grey.black,
      fontWeight: 'bold',
      width: 'fit-content',
      fontSize: '1.125rem',
    },
    cardFooterHead: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    cardFooterBody: {
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'flex-start',
    },
    pBold: {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
      fontSize: '0.87rem',
    },
    p: {
      fontSize: '0.87rem',
      fontWeight: 'bold',
      marginRight: '20px',
    },
  };
};

export default useStyles;
