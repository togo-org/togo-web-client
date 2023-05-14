import HowMuch from '@/pages/SelectEvent/HowMuch';
import What from '@/pages/SelectEvent/What';
import When from '@/pages/SelectEvent/When';
import ContentContainer from '@/pages/SelectEvent/components/ContentContainer';
import Tabs from '@/pages/SelectEvent/components/Tabs';
import { SELECT_EVENT_TABS } from '@/pages/SelectEvent/utils';
import BgImage from '@/shared/BgImage';
import { Box } from '@mui/material';
import { useState } from 'react';

const SelectEvent = () => {
  const [selectedTab, setSelectedTab] = useState(SELECT_EVENT_TABS.WHAT);

  return (
    <Box>
      <Tabs setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
      <ContentContainer>
        {selectedTab === SELECT_EVENT_TABS.WHAT && <What />}
        {selectedTab === SELECT_EVENT_TABS.HOW_MUCH && <HowMuch />}
        {selectedTab === SELECT_EVENT_TABS.WHEN && <When />}
      </ContentContainer>
      <BgImage />
    </Box>
  );
};

export default SelectEvent;
