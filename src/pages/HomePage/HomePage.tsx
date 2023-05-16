import { Box, Typography } from '@mui/material';
import ContentContainer from './components/ContentContainer';
import BgImage from './components/BgImage';
import ICONS from '@utils/constants/ICONS';
import Icon from '@shared/Icon';
import Card from '@shared/Card';
import FoodImg from '@/assets/images/preview-card.png';
import IconContainer from './components/IconContainer/IconContainer';
import TyphographyContainer from './components/TyphograpyContainer';
const HomePage = () => {
  return (
    <ContentContainer>
      <IconContainer />
      <Icon src={ICONS.Menu} size='xl' alt='alt' />
      <TyphographyContainer>
        <Typography sx={{}}>היי יניב</Typography>
      </TyphographyContainer>
      <Card src={FoodImg} alt='food' />
      <BgImage />
    </ContentContainer>
  );
};

export default HomePage;
