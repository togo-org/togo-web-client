'use client';

import Icon from '@/features/shared/Icon';
import ICONS from '@/utils/constants/ICONS';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  const handleBackArrowClick = () => {
    router.push('/select-event/what');
  };
  return (
    <Box
      onClick={handleBackArrowClick}
      sx={{
        position: 'absolute',
        right: '20px',
      }}
    >
      <Icon src={ICONS.ArrowBack} alt='back arrow' size='l' />
    </Box>
  );
};

export default BackButton;
