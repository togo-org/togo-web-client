import Icon from '@/features/shared/Icon';
import ICONS from '@/utils/constants/ICONS';
import { Box, Typography } from '@mui/material';
import useStyles from './Title.useStyles';

const Title = () => {
  const styles = useStyles();
  return (
    <Typography variant='h1' sx={styles.root}>
      טוגו
      <Box sx={styles.icon}>
        <Icon src={ICONS.Settings} size='l' alt='close' />
      </Box>
    </Typography>
  );
};

export default Title;
