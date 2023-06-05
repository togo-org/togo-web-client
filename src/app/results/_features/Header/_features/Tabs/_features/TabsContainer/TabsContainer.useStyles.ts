import { useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      borderRadius: '10px',
      padding: '12px 22px',
      gap: '22px',
      position: 'relative',
    },
  };
};

export default useStyles;
