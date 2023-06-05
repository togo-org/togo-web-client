'use client';

import BgImage from '@/features/shared/BgImage';
import Button from '@/features/shared/Button';
import IMAGES from '@/utils/constants/IMAGES';
import { Box } from '@mui/material';
import ButtonsContainer from './_features/ButtonsContainer';
import SubTitle from './_features/SubTitle';
import Title from './_features/Title';
import TitlesContainer from './_features/TitlesContainer';
import { useRouter } from 'next/navigation';

const Splash = () => {
  const router = useRouter();

  const handleEnterAsGuestClick = () => {
    router.push('/home');
  };

  return (
    <Box>
      <TitlesContainer>
        <Title />
        <SubTitle />
      </TitlesContainer>
      <ButtonsContainer>
        <Button label='התחברות באמצעות גוגל' shape='pill' />
        <Button label='התחברות באמצעות מייל' shape='pill' />
        <Button
          label='היכנס כאורח'
          shape='pill'
          onClick={handleEnterAsGuestClick}
        />
      </ButtonsContainer>
      <BgImage src={IMAGES.BgImage} alt='Background Image' />
    </Box>
  );
};

export default Splash;
