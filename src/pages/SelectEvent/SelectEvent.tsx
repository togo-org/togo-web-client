import HowMuch from '@/pages/SelectEvent/HowMuch';
import What from '@/pages/SelectEvent/What';
import When from '@/pages/SelectEvent/When';
import ContentContainer from '@/pages/SelectEvent/components/ContentContainer';
import Footer from '@/pages/SelectEvent/components/Footer';
import HeaderContainer from '@/pages/SelectEvent/components/HeaderContainer';
import PageWrapper from '@/pages/SelectEvent/components/PageWrapper';
import Tabs from '@/pages/SelectEvent/components/Tabs';
import BgImage from '@/shared/BgImage';
import IMAGES from '@/utils/constants/IMAGES';
import SELECT_EVENT_TABS from '@/utils/constants/SELECT_EVENT_TABS';
import { useState } from 'react';

const SelectEvent = () => {
  const [selectedTab, setSelectedTab] = useState(SELECT_EVENT_TABS.WHAT);

  return (
    <PageWrapper>
      <HeaderContainer selectedTab={selectedTab}>
        <Tabs setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
      </HeaderContainer>
      <ContentContainer>
        {selectedTab === SELECT_EVENT_TABS.WHAT && <What />}
        {selectedTab === SELECT_EVENT_TABS.HOW_MUCH && <HowMuch />}
        {selectedTab === SELECT_EVENT_TABS.WHEN && <When />}
      </ContentContainer>
      <BgImage src={IMAGES.BgImage} alt='Background Image' />
      <Footer />
    </PageWrapper>
  );
};

export default SelectEvent;
