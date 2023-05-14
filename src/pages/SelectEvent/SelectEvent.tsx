import HowMuch from '@/pages/SelectEvent/HowMuch';
import What from '@/pages/SelectEvent/What';
import When from '@/pages/SelectEvent/When';
import Button from '@/shared/Button';
import { Box } from '@mui/material';
import { useState } from 'react';

const SELECT_EVENT_TABS = {
  HOW_MUCH: 'How Much',
  WHAT: 'What',
  WHEN: 'When',
};

const SelectEvent = () => {
  const [selectedTab, setSelectedTab] = useState(SELECT_EVENT_TABS.WHAT);

  const changeTab = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <Box>
      <Box>
        <Button label='מה?' onClick={() => changeTab(SELECT_EVENT_TABS.WHAT)} />
        <Button
          label='כמה?'
          onClick={() => changeTab(SELECT_EVENT_TABS.HOW_MUCH)}
        />
        <Button
          label='מתי?'
          onClick={() => changeTab(SELECT_EVENT_TABS.WHEN)}
        />
      </Box>
      <Box>
        {selectedTab === SELECT_EVENT_TABS.WHAT && <What />}
        {selectedTab === SELECT_EVENT_TABS.HOW_MUCH && <HowMuch />}
        {selectedTab === SELECT_EVENT_TABS.WHEN && <When />}
      </Box>
    </Box>
  );
};

export default SelectEvent;
