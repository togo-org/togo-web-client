import { Typography } from '@mui/material';
import ContentContainer from '@/pages/HomePage/components/ContentContainer'
import ICONS from '@/utils/constants/ICONS';
import Icon from '@/shared/Icon';
import Card from '@/shared/Card';
import FoodImg from '@/assets/images/preview-card.png';
import HeroContainer from '@/pages/HomePage/components/HeroContainer';
import Button from '@/shared/Button';
import CardContainer from '@/pages/HomePage/components/CardContainer/CardContainer';
import useStyles from '@/pages/HomePage/HomePage.useStyles';

const HomePage = () => {
  const styles = useStyles();
  return (
    <ContentContainer>
      <HeroContainer>
        <Icon src={ICONS.Menu} size='xl' alt='alt' />

        <Typography component='h1'>היי יניב</Typography>
        <Typography component='h1'>היי יניב</Typography>
        <Button label='התחברות באמצעות גוגל' shape='pill' />
        
      </HeroContainer>
      <CardContainer>
        <Card src={FoodImg} alt='food' />
      </CardContainer>
    </ContentContainer>
  );
};

export default HomePage;
