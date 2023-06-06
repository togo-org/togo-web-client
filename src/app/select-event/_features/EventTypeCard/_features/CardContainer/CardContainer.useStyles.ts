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
      [theme.breakpoints.up('lg')]: {
        maxWidth: '340px',
        height: '175px',
        border: 'soild 200px blue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      },
    },
  };
};

export default useStyles;
