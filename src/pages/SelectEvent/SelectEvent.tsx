import HowMuch from '@/pages/SelectEvent/HowMuch';
import What from '@/pages/SelectEvent/What';
import When from '@/pages/SelectEvent/When';
import ContentContainer from '@/pages/SelectEvent/components/ContentContainer';
import Footer from '@/pages/SelectEvent/components/Footer';
import HeaderContainer from '@/pages/SelectEvent/components/HeaderContainer';
import PageWrapper from '@/pages/SelectEvent/components/PageWrapper';
import Tabs from '@/pages/SelectEvent/components/Tabs';
import BgImage from '@/shared/BgImage';
import { currentSelectEventTabState } from '@/store';
import IMAGES from '@/utils/constants/IMAGES';
import TABS_ARRAY from '@/utils/constants/TABS_ARRAY';
import { useRecoilValue } from 'recoil';

const SelectEvent = () => {
  const selectedTab = useRecoilValue(currentSelectEventTabState);
  return (
    <PageWrapper>
      <HeaderContainer selectedTab={TABS_ARRAY[selectedTab]}>
        <Tabs />
      </HeaderContainer>
      <ContentContainer>
        {selectedTab === 0 && <What />}
        {selectedTab === 1 && <HowMuch />}
        {selectedTab === 2 && <When />}
      </ContentContainer>
      <BgImage src={IMAGES.BgImage} alt='Background Image' />
      <Footer />
    </PageWrapper>
  );
};

export default SelectEvent;
