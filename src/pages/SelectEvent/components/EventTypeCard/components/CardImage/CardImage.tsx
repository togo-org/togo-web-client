import Image, { StaticImageData } from 'next/image';

interface CardImageProps {
  src: StaticImageData;
  alt: string;
}

const CardImage = ({ src, alt }: CardImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        objectFit: 'cover',
      }}
    />
  );
};

export default CardImage;
