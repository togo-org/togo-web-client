'use client';

import { EventInterface } from '@/types';
import { useGetDistanceBetweenUserAndEvent } from '@/utils/hooks';
import BottomContent from './_features/BottomContent';
import CardContainer from './_features/CardContainer';
import CardContentContainer from './_features/CardContentContainer';
import CardImage from './_features/CardImage';
import ShadowBackground from './_features/ShadowBackground';
import TopContent from './_features/TopContent';

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
