import BackButton from '@/pages/ResultsPage/components/Header/components/BackButton';
import HeaderContainer from '@/pages/ResultsPage/components/Header/components/HeaderContainer';
import Tabs from '@/pages/ResultsPage/components/Header/components/Tabs';
import Title from '@/pages/ResultsPage/components/Header/components/Title';
import { Box } from '@mui/material';

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
