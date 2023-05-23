import useStyles from '@/pages/ResultsPage/components/Footer/components/FooterContainer/FooterContainer.useStyles';
import { Box } from '@mui/material';

interface FooterContainerProps {
  children: React.ReactNode;
}

const FooterContainer = ({ children }: FooterContainerProps) => {
  const styles = useStyles();
  return (
    <Box component='footer' sx={styles.root}>
      {children}
    </Box>
  );
};

export default FooterContainer;
