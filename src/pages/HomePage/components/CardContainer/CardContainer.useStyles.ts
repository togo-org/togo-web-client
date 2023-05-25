const useStyles = () => {
  return {
    root: {
      width: '100%',
      height: 'fit-content',

    },
    header: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    cardContainer: {
      display: 'flex',
      justifyContent: 'flex-wrap',
      flexWrap: 'no-wrap',
      overflowX: 'scroll',
      height: '100%',
      width: '100%',
      gap: '20px',
    },
  };
};
export default useStyles;
