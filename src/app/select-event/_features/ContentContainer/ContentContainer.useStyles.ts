import { useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: {
      background: 'transparent',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexGrow: 1,
      [theme.breakpoints.up('lg')]: {
        flexDirection: 'row',
        border: '1px solid #000000',
      },
    },
  };
};

export default useStyles;
