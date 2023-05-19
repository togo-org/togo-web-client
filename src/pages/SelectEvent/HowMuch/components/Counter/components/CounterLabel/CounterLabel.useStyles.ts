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
      flex: '2',
    },
  };
};

export default useStyles;
