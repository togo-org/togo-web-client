import { Box, Typography } from '@mui/material';
import useStyles from './Header.useStyles';

const Header = () => {
  const styles = useStyles();
  return (
    <Box sx={styles.root}>
      <Typography sx={styles.content}>היי יניב</Typography>
      <Typography sx={styles.content2}>
        {' '}
        מצאנו לך מקומות שווים רצח אחי
      </Typography>
    </Box>
  );
};

export default Header;
