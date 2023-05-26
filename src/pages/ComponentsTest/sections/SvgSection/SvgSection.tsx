import { Box } from '@mui/material';
import HomeIcon from '@/shared/SvgIcons/HomeIcon/HomeIcon';
import useStyles from './SvgSection.useStyles';

function SvgSection() {
  const styles = useStyles();
  return (
    <Box sx={styles.root}>
      <HomeIcon  color='primary' fontSize='inherit' sx={{color: 'red'}}/>
    </Box>
  );
}

export default SvgSection;
