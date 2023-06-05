'use client';

import { Box } from '@mui/material';
import LinkToSite from '../LinkToSite';

interface BottomContentProps {
  link: string | undefined;
}

const BottomContent = ({ link }: BottomContentProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <LinkToSite link={link} />
    </Box>
  );
};

export default BottomContent;
