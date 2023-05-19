import ButtonsContainer from '@/pages/Splash/components/ButtonsContainer';
import SubTitle from '@/pages/Splash/components/SubTitle';
import Title from '@/pages/Splash/components/Title';
import TitlesContainer from '@/pages/Splash/components/TitlesContainer';
import BgImage from '@/shared/BgImage';
import Button from '@/shared/Button';
import { Box } from '@mui/material';
import IMAGES from '@/utils/constants/IMAGES';

const Splash = () => {
  return (
    <Box>
      <TitlesContainer>
        <Title />
        <SubTitle />
      </TitlesContainer>
      <ButtonsContainer>
        <Button label='התחברות באמצעות גוגל' shape='pill' />
        <Button label='התחברות באמצעות מייל' shape='pill' />
      </ButtonsContainer>

      <BgImage src={IMAGES.BgImage} alt='Background Image' />
    </Box>
  );
};

export default Splash;
