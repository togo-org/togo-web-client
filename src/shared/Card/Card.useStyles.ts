import colors from '@/theme/colors';
import '@fontsource/rubik';

const useStyles = () => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      color: colors.grey.black,
      backgroundColor: colors.grey.white,
      fontFamily: 'rubik',
      fontSize: '1.16rem',
      borderRadius: '15px',
      width: 'fit-content',
      height: '300px',
      gap: '10px',
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
      border: '2px solid red',
    },
    cardFooter: {
      display: 'flex',
      justifyContent: 'flex-end',
      border: '1px solid red',
    },
    cardTextContainer: {
      display: 'flex',
    },
  };
};

export default useStyles;
