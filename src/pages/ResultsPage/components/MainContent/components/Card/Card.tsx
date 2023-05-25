import BottomContent from '@/pages/ResultsPage/components/MainContent/components/Card/components/BottomContent/BottomContent';
import CardContainer from '@/pages/ResultsPage/components/MainContent/components/Card/components/CardContainer/CardContainer';
import CardContentContainer from '@/pages/ResultsPage/components/MainContent/components/Card/components/CardContentContainer/CardContentContainer';
import CardImage from '@/pages/ResultsPage/components/MainContent/components/Card/components/CardImage/CardImage';
import ShadowBackground from '@/pages/ResultsPage/components/MainContent/components/Card/components/ShadowBackground/ShadowBackground';
import TopContent from '@/pages/ResultsPage/components/MainContent/components/Card/components/TopContent/TopContent';
import { EventInterface } from '@/types';
import { useGetDistanceBetweenUserAndEvent } from '@/utils/hooks';

interface CardProps {
  event: EventInterface;
}

const Card = ({ event }: CardProps) => {
  const distance = useGetDistanceBetweenUserAndEvent(event);
  const { name, address, image, city, link } = event;


  return (
    <CardContainer>
      <CardContentContainer>
        <TopContent
          name={name}
          distance={distance}
          address={address}
          city={city}
        />
        <BottomContent link={link} />
      </CardContentContainer>
      <CardImage image={image} alt={name} />
      <ShadowBackground />
    </CardContainer>
  );
};

export default Card;
