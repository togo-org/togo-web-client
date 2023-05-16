import colors from '@/theme/colors';
import '@fontsource/rubik/500.css';

const useStyles = () => {
  return {
    root: {
      zIndex: 1,
      fontFamily: 'Rubik',
      fontWeight: 500,
      fontSize: '1.625rem',
      lineHeight: '30.81px',
      color: colors.grey.white,
    },
  };
};

export default useStyles;
