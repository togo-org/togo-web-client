import IMAGES from '@/utils/constants/IMAGES';
import Image from 'next/image';

const BgImage = () => {
  return (
    <Image
      src={IMAGES.BgImage}
      alt='Background image'
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        height: '100vh',
        width: 'calc(1846px * 1)',
        transform: 'translateX(-40%)',
      }}
    />
  );
};

export default BgImage;
