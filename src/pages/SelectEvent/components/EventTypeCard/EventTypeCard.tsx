import CardContainer from '@/pages/SelectEvent/components/EventTypeCard/components/CardContainer';
import CardImage from '@/pages/SelectEvent/components/EventTypeCard/components/CardImage';
import CardLabel from '@/pages/SelectEvent/components/EventTypeCard/components/CardLabel';
import { StaticImageData } from 'next/image';

interface EventTypeCardProps {
  label: string;
  src: StaticImageData;
  alt: string;
}

const EventTypeCard = ({ label, src, alt }: EventTypeCardProps) => {
  return (
    <CardContainer>
      <CardImage src={src} alt={alt} />
      <CardLabel label={label} />
    </CardContainer>
  );
};

export default EventTypeCard;
