import colors from '@/theme/colors';

const useStyles = () => {
  return {
    root: {
      position: 'relative',
      background: 'transparent',
      color: colors.grey.black,
      textAlign: 'center',
      fontSize: '44px',
      fontWeight: 'bold',
      fontFamily: 'sans-serif',
    },
    icon: {
      position: 'absolute',
      left: '170px',
      bottom: '0px',
    },
  };
};

export default useStyles;
