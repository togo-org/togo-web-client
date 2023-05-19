import Image from 'next/image';
import HomePageBg from '@/assets/images/home-page-bg.png';

const BgImage = () => {
  return (
    <Image
      src={HomePageBg}
      alt='Background image'
      style={{
        height: '100%',
        width: '100%',
      }}
    ></Image>
  );
};

export default BgImage;
