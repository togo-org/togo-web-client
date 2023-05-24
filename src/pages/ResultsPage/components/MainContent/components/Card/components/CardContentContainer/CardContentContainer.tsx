import useStyles from '@/pages/ResultsPage/components/MainContent/components/Card/components/CardContentContainer/CardContentContainer.useStyles';
import { Box } from '@mui/material';

interface CardContentContainerProps {
  children: React.ReactNode;
}

const CardContentContainer = ({ children }: CardContentContainerProps) => {
  const styles = useStyles();
  return <Box sx={styles.root}>{children}</Box>;
};

export default CardContentContainer;
