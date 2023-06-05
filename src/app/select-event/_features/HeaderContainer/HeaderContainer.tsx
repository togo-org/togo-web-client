'use client';

// import TabTitle from '@/app/select-event/_features/TabTitle';
import Icon from '@/features/shared/Icon';
import ICONS from '@/utils/constants/ICONS';
// import SELECT_EVENT_TABS from '@/utils/constants/SELECT_EVENT_TABS';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

interface HeaderContainerProps {
  children: React.ReactNode;
}

const HeaderContainer = ({ children }: HeaderContainerProps) => {
  const router = useRouter();

  const handleCloseClick = () => {
    router.push('/home');
  };

  // const getFormatedLabel = (tab: string) => {
  //   switch (tab) {
  //     case SELECT_EVENT_TABS.WHAT:
  //       return 'מה עושים?';
  //     case SELECT_EVENT_TABS.HOW_MUCH:
  //       return 'כמה תהיו?';
  //     case SELECT_EVENT_TABS.WHEN:
  //       return 'מתי הכי מתאים לך?';
  //     default:
  //       return '';
  //   }
  // };

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
        onClick={handleCloseClick}
      >
        <Icon src={ICONS.Close} alt='close' size='l' />
      </Box>

      {children}
      {/* <TabTitle label={getFormatedLabel(selectedTab)} /> */}
    </Box>
  );
};

export default HeaderContainer;
