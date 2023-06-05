import colors from '@/theme/colors';

const useStyles = () => {
  const { grey } = colors;
  return {
    root: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: grey.grey1,
    },

    default: {
      backgroundColor: grey.grey1,
      opacity: 0.2,
    },

    filled: {
      opacity: 1,
    },
  };
};

export default useStyles;
