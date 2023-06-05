import { useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: {
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      flex: 1,
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '340px',
        height: '76px',
        border: 'soild 2px red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flex: 1,
      },
    },
  };
};

export default useStyles;
