'use client';

import { Box } from '@mui/material';
import BackButton from './_features/BackButton';
import HeaderContainer from './_features/HeaderContainer';
import Tabs from './_features/Tabs';
import Title from './_features/Title';

const Header = () => {
  return (
    <HeaderContainer>
      <Title label='המסעדות המומלצות בשבילך:' />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '30px',
        }}
      >
        <BackButton />
        <Tabs />
      </Box>
    </HeaderContainer>
  );
};

export default Header;
