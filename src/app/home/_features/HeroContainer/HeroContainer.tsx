'use client';

import Button from '@/features/shared/Button';
import { isMenuOpenState } from '@/store';
import IMAGES from '@/utils/constants/IMAGES';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import BgImage from '../BgImage';
import useStyles from './HeroContainer.useStyles';
import Header from './_features/Header';
import Icon from './_features/IconContainer';

const HeroContainer = () => {
  const setIsMenuOpen = useSetRecoilState(isMenuOpenState);
  const styles = useStyles();
  const router = useRouter();

  function handleClick() {
    router.push('/select-event');
  }
  return (
    <Box sx={styles.root}>
      <Icon
        onClick={() => {
          setIsMenuOpen(true);
        }}
      />
      <Header />
      <Button
        label='לחיפוש מותאם אישית'
        shape='pill'
        onClick={() => handleClick()}
      />
      <BgImage src={IMAGES.HeroContainerBgImage} alt='man' />
    </Box>
  );
};

export default HeroContainer;
