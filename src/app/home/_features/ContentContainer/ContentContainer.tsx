import { Box } from '@mui/material';
import useStyles from './ContentContainer.useStyles';

interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer = ({ children }: ContentContainerProps) => {
  const styles = useStyles();
  return <Box sx={styles.root}>{children}</Box>;
};

export default ContentContainer;
