import { Box, Card, Paper } from '@mui/material';
import Image from 'next/image';
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
