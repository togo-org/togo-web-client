'use client';

import { Box } from '@mui/material';
import ContinueButton from './_features/ContinueButton';
import Counter from './_features/Counter';

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
