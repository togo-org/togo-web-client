import Image from 'next/image';
import HomePageBg from '@/assets/images/home-page-bg.png';


const BgImage = () => {
    return (
      <Image
        src={HomePageBg}
        alt='Background image'
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
          height: '100%',
          width: 'calc(2300px * 1)',
          transform: 'translateX(-40%)',
        }}
      />
    );
  };
  
  export default BgImage;