import useStyles from '@/pages/HomePage/components/ContentContainer/ContentContainer.useStyles';
import { Box } from '@mui/material';


interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer = ({ children }: ContentContainerProps) => {
  const styles = useStyles();
  return <Box sx={styles.root}>{children}</Box>;
};

export default ContentContainer;
