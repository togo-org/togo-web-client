import { Box } from '@mui/material';
import { useSetRecoilState } from 'recoil';
import { isMenuOpenState } from '@/store';
import React from 'react';
import {useRouter} from 'next/router';

import Button from '@/shared/Button';
import IMAGES from '@/utils/constants/IMAGES';
import useStyles from './HeroContainer.useStyles';
import Header from './components/Header';
import Icon from './components/IconContainer';
import BgImage from '../BgImage';


const HeroContainer = () => {
  const setIsMenuOpen = useSetRecoilState(isMenuOpenState);
  const styles = useStyles();
 const router = useRouter();
function handleClick() {
  router.push('/SelectEvent')
}
  return (
    <Box sx={styles.root}>
      <Icon onClick={() => {setIsMenuOpen(true)}}/>
      <Header />
      <Button label='לחיפוש מותאם אישית' shape='pill' onClick={() => handleClick()}/>
       <BgImage  src={IMAGES.HeroContainerBgImage} alt='man' />
    </Box>
  );
};

export default HeroContainer;
