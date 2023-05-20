import colors from '@/theme/colors';

const useStyles = () => {
  const { grey } = colors;
  return {
    root: {
      backgroundColor: 'none',
      fontSize: '6.125rem',
      color: grey.white,
      fontWeight: 'bold',
      fontFamily: 'Rubik',
      flex: '4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
};

export default useStyles;
