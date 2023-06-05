'use client';

import HamburgerMenu from '@/features/hamburgerMenu';
import { isMenuOpenState } from '@/store';
import IMAGES from '@/utils/constants/IMAGES';
import { useRecoilValue } from 'recoil';
import BgImage from './_features/BgImage';
import BodyContainer from './_features/BodyContainer';
import CardContainer from './_features/CardContainer';
import ContentContainer from './_features/ContentContainer';
import HeroContainer from './_features/HeroContainer';

const HomePage = () => {
  const isMenuOpen = useRecoilValue<boolean>(isMenuOpenState);

  return isMenuOpen ? (
    <HamburgerMenu />
  ) : (
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
