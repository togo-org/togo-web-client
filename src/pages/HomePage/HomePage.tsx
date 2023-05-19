import { Typography, Select } from '@mui/material';
import ContentContainer from './components/ContentContainer';

import ICONS from '@utils/constants/ICONS';
import Icon from '@shared/Icon';
import Card from '@shared/Card';
import FoodImg from '@/assets/images/preview-card.png';
import TyphographyContainer from './components/TyphograpyContainer';
import Button from '@shared/Button';
import CardContainer from './components/CardContainer/CardContainer';
const HomePage = () => {
  return (
    <ContentContainer>
      <TyphographyContainer>
        <Icon src={ICONS.Menu} size='xl' alt='alt' />

        <Typography component={'h1'}>היי יניב</Typography>
        <Typography component={'h1'}>היי יניב</Typography>
        <Button label='התחברות באמצעות גוגל' shape='pill' />
        <Select></Select>
      </TyphographyContainer>
      <CardContainer>
        <Card src={FoodImg} alt='food' />
      </CardContainer>
    </ContentContainer>
  );
};

export default HomePage;
