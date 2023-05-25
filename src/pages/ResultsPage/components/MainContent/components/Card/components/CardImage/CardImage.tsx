import { Box } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

interface CardImageProps {
  image: string | StaticImageData;
  alt: string;
}

const CardImage = ({ image, alt }: CardImageProps) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    >
      <Image
        src={image}
        alt={alt}
        width={100}
        height={100}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          zIndex: -2,
        }}
      />
    </Box>
  );
};

export default CardImage;
