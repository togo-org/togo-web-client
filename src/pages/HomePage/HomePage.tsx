import ContentContainer from '@/pages/HomePage/components/ContentContainer';
import HeroContainer from '@/pages/HomePage/components/HeroContainer';
import CardContainer from '@/pages/HomePage/components/CardContainer/CardContainer';
import BgImage from '@/pages/HomePage/components/BgImage';
import IMAGES from '@/utils/constants/IMAGES';
import BodyContainer from '@/pages/HomePage/components/BodyContainer';

const HomePage = () => {
  return (
    <ContentContainer>
      <HeroContainer />
      <BodyContainer>
        <CardContainer type='restaurant' />
        <CardContainer type='trip' />
        <CardContainer type='attraction' />
        <BgImage src={IMAGES.HomePageBodyContainerBgImage} alt='bg' />
      </BodyContainer>
    </ContentContainer>
  );
};

export default HomePage;
