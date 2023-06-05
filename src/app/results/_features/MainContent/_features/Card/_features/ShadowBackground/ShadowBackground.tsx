'use client';

import { Box } from '@mui/material';

const ShadowBackground = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.418)',
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        zIndex: -1,
      }}
    />
  );
};

export default ShadowBackground;
