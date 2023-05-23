const useStyles = () => {
  return {
    root: {
      width: '100%',
      height: '100%',
      border: '2px dashed red',
    },
    header: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    card: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      gap: '2rem',
      border: '2px dashed blue',
      height: 'fit-content',
    },
  };
};
export default useStyles;
