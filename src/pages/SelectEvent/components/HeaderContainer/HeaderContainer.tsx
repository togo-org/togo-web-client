import TabTitle from '@/pages/SelectEvent/components/TabTitle';
import SELECT_EVENT_TABS from '@/utils/constants/SELECT_EVENT_TABS';
import { Box } from '@mui/material';
import React from 'react';

interface HeaderContainerProps {
  children: React.ReactNode;
  selectedTab: string;
}

const HeaderContainer = ({ children, selectedTab }: HeaderContainerProps) => {
  const getFormatedLabel = (tab: string) => {
    switch (tab) {
      case SELECT_EVENT_TABS.WHAT:
        return 'מה עושים?';
      case SELECT_EVENT_TABS.HOW_MUCH:
        return 'כמה תהיו?';
      case SELECT_EVENT_TABS.WHEN:
        return 'מתי הכי מתאים לך?';
      default:
        return '';
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 'fit-content',
        padding: '0px',
        gap: '20px',
      }}
    >
      {children}
      <TabTitle label={getFormatedLabel(selectedTab)} />
    </Box>
  );
};

export default HeaderContainer;
