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
        position: 'absolute',
        zIndex: -1,
      }}
    />
  );
};

export default BgImage;
