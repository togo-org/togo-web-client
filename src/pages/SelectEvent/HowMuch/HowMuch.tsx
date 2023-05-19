import ContinueButton from '@/pages/SelectEvent/HowMuch/components/ContinueButton';
import Counter from '@/pages/SelectEvent/HowMuch/components/Counter';
import TabTitle from '@/pages/SelectEvent/components/TabTitle';
import { Box } from '@mui/material';

const HowMuch = () => {
  return (
    <Box>
      <TabTitle label='כמה תהיו?' />
      <Counter />
      <ContinueButton />
    </Box>
  );
};

export default HowMuch;
