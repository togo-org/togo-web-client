import backgroundImage from '../../../../assets/images/bg-image.png';

const useStyles = () => {
  return {
    root: {
      width: '100%',
      height: 'fit-content',
      border: '2px solid red',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem',
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
    },
    header: {
      fontSize: '2rem',
    },
  };
};

export default useStyles;
