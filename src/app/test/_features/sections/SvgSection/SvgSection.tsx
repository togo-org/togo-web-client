'use client';

import HomeIcon from '@/features/shared/SvgIcons/HomeIcon/HomeIcon';
import { Box } from '@mui/material';
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
