import { useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: {
      backgroundColor: theme.palette.primary.dark,
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: '20px',
      height: '100%',
      maxHeight: '326px',
    },
  };
};

export default useStyles;
