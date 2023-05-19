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
    },
  };
};

export default useStyles;
