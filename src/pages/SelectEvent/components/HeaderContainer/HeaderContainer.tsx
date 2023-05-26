import TabTitle from '@/pages/SelectEvent/components/TabTitle';
import Icon from '@/shared/Icon';
import ICONS from '@/utils/constants/ICONS';
import SELECT_EVENT_TABS from '@/utils/constants/SELECT_EVENT_TABS';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

interface HeaderContainerProps {
  children: React.ReactNode;
  selectedTab: string;
}

const HeaderContainer = ({ children, selectedTab }: HeaderContainerProps) => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/');
  };

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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 'fit-content',
        paddingBottom: '16px',
        gap: '20px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
        onClick={handleHomeClick}
      >
        <Icon src={ICONS.Home} alt='home' size='l' />
      </Box>

      {children}
      <TabTitle label={getFormatedLabel(selectedTab)} />
    </Box>
  );
};

export default HeaderContainer;
