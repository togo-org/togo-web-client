import Icon from '@/shared/Icon';
// import ICONS from '@/utils/constants/ICONS';

import { Box } from '@mui/material';

interface ArrowButtonProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const ArrowButton = ({ src, alt, onClick }: ArrowButtonProps) => {
  return (
    <Box onClick={onClick}>
      <Icon src={src} alt={alt} size='xl' />
    </Box>
  );
};

export default ArrowButton;
