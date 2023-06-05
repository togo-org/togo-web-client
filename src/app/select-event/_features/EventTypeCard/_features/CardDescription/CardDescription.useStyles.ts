const useStyles = () => {
  return {
    root: {
      zIndex: 1,
      fontFamily: 'Rubik',
      fontSize: '1.25rem',
      color: '#ffffff',
      textAlign: 'center',
      '@media (max-height: 800px)': {
        fontSize: '1.25rem',
      },
      '@media (max-height: 700px)': {
        fontSize: '1rem',
      },
      '@media (max-height: 600px)': {
        fontSize: '0.75rem',
      },
    },
  };
};

export default useStyles;
