import { Box } from '@mui/material';
import useStyles from './IconContaineruseStyles';

interface IconContainerProps {
  children: React.ReactNode;
}

const IconContainer = ({children}: IconContainerProps) => {
  const styles = useStyles();
  return <Box sx={styles.root}>{children}</Box>;
};

export default IconContainer;
