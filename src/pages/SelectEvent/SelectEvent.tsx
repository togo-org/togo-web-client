import HowMuch from '@/pages/SelectEvent/HowMuch';
import What from '@/pages/SelectEvent/What';
import When from '@/pages/SelectEvent/When';
import BottomContainer from '@/pages/SelectEvent/components/BottomContainer';
import ContentContainer from '@/pages/SelectEvent/components/ContentContainer';
import HeaderContainer from '@/pages/SelectEvent/components/HeaderContainer';
import PageWrapper from '@/pages/SelectEvent/components/PageWrapper';
import Tabs from '@/pages/SelectEvent/components/Tabs';
import BgImage from '@/shared/BgImage';
import SELECT_EVENT_TABS from '@/utils/constants/SELECT_EVENT_TABS';
import { useState } from 'react';

const SelectEvent = () => {
  const [selectedTab, setSelectedTab] = useState(SELECT_EVENT_TABS.WHAT);

  return (
    <PageWrapper>
      <HeaderContainer>
        <Tabs setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
      </HeaderContainer>
      <ContentContainer>
        {selectedTab === SELECT_EVENT_TABS.WHAT && <What />}
        {selectedTab === SELECT_EVENT_TABS.HOW_MUCH && <HowMuch />}
        {selectedTab === SELECT_EVENT_TABS.WHEN && <When />}
      </ContentContainer>
      <BgImage />
      <BottomContainer>Bottom Container</BottomContainer>
    </PageWrapper>
  );
};

export default SelectEvent;
