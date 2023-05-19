import { Box } from '@mui/material';
import useStyles from './ImageBgContainer.useStyles';

interface ImageBgContainerProps {
  children: React.ReactNode;
}


const ImageBgContainer = ({children}: ImageBgContainerProps) => {
  const styles = useStyles();
  return (
    <Box sx={styles.root}>
      {children}
    </Box>
  );
};

export default ImageBgContainer;
