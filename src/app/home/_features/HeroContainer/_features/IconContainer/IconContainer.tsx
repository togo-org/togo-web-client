import Icon from '@/features/shared/Icon';
import ICONS from '@/utils/constants/ICONS';
import { Box } from '@mui/material';
import useStyles from './IconContainer.useStyles';

interface IconContainerProps {
  onClick?: () => void;
}

const IconContainer = ({ onClick }: IconContainerProps) => {
  const styles = useStyles();
  return (
    <Box sx={styles.root} onClick={onClick}>
      <Icon src={ICONS.Menu} size='xl' alt='close' />
    </Box>
  );
};

export default IconContainer;
