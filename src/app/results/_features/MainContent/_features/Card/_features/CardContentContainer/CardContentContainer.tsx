import { Box } from '@mui/material';
import useStyles from './CardContentContainer.useStyles';

interface CardContentContainerProps {
  children: React.ReactNode;
}

const CardContentContainer = ({ children }: CardContentContainerProps) => {
  const styles = useStyles();
  return <Box sx={styles.root}>{children}</Box>;
};

export default CardContentContainer;
