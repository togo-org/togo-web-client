import { useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      borderRadius: '10px',
    },
  };
};

export default useStyles;
