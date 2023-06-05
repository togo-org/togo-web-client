import colors from '@/theme/colors';

const useStyles = () => {
  const { grey } = colors;

  return {
    root: {
      fontFamily: 'Rubik',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '20px',
      color: grey.black,
    },
  };
};

export default useStyles;
