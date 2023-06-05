import Image, { StaticImageData } from 'next/image';

interface BgImageProps {
  src: StaticImageData;
  alt: string;
}

const BgImage = ({ src, alt }: BgImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
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
