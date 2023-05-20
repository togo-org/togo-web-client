import ContinueButton from '@/pages/SelectEvent/HowMuch/components/ContinueButton';
import Counter from '@/pages/SelectEvent/HowMuch/components/Counter';
import { Box } from '@mui/material';

const HowMuch = () => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        padding: '0 78px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Counter />
      <ContinueButton />
    </Box>
  );
};

export default HowMuch;
