const useStyles = () => {
  return {
    root: {
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      width: '300px',
      height: 'calc(300px * 0.5)',
      '@media (max-height: 800px)': {
        width: '250px',
        height: 'calc(250px * 0.5)',
      },
      '@media (max-height: 700px)': {
        width: '200px',
        height: 'calc(200px * 0.5)',
      },
      '@media (max-height: 600px)': {
        width: '150px',
        height: 'calc(150px * 0.5)',
      },
    },
  };
};

export default useStyles;
