import Icon from '@/shared/Icon';
import ICONS from '@/utils/constants/ICONS';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';

const BackButton = () => {
  const router = useRouter();
  const handleBackArrowClick = () => {
    router.back();
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
