import colors from '@/theme/colors';

const useStyles = () => {
  return {
    root: {
      position: 'relative',
      background: 'transparent',
      color: colors.grey.black,
      textAlign: 'center',
      fontSize: '5rem',
      fontWeight: 'bold',
      fontFamily: 'sans-serif',
      letterSpacing: '0.5rem',
      padding: '1rem',
      zIndex: 1,
      gap: '10px',
    },
  };
};

export default useStyles;
