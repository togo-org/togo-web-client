import colors from '@/theme/colors';

const useStyles = () => {
  const { grey } = colors;
  return {
    root: {
      backgroundColor: 'none',
      fontSize: '2.4rem',
      color: grey.white,
      fontWeight: 'bold',
      padding: '0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        backgroundColor: 'none',
        color: grey.white,
      },
    },

    disabled: {
      opacity: 0.3,
    },
  };
};

export default useStyles;
