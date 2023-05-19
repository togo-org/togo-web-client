import { Box } from '@mui/material';
import useStyles from './IconContaineruseStyles';

const IconContainer = () => {
  const styles = useStyles();
  return <Box sx={styles.root}></Box>;
};

export default IconContainer;
