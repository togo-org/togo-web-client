import CardContainer from '@/pages/SelectEvent/components/EventTypeCard/components/CardContainer';
import CardImage from '@/pages/SelectEvent/components/EventTypeCard/components/CardImage';
import CardLabel from '@/pages/SelectEvent/components/EventTypeCard/components/CardLabel';
import { userSearchDataState } from '@/store';
import { UserEventType } from '@/types';
import { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

interface EventTypeCardProps {
  label: string;
  src: StaticImageData;
  alt: string;
  eventType: UserEventType;
}

const EventTypeCard = ({ label, src, alt, eventType }: EventTypeCardProps) => {
  const userSearchData = useRecoilValue(userSearchDataState);
  const setUserSearchData = useSetRecoilState(userSearchDataState);
  const { what } = userSearchData;
  const [isEventCardSelected, setIsEventCardSelected] = useState(false);

  const isGlobalEventTypeSameAsCard = ({
    globalEventType,
    cardEventType,
  }: {
    globalEventType: UserEventType | null;
    cardEventType: UserEventType;
  }) => {
    return globalEventType === cardEventType;
  };

  useEffect(() => {
    if (
      isGlobalEventTypeSameAsCard({
        globalEventType: what,
        cardEventType: eventType,
      })
    ) {
      setIsEventCardSelected(true);
    } else {
      setIsEventCardSelected(false);
    }
  }, [eventType, what]);

  const handleClick = () => {
    if (
      isGlobalEventTypeSameAsCard({
        globalEventType: what,
        cardEventType: eventType,
      })
    ) {
      setUserSearchData((prev) => ({ ...prev, what: null }));
      setIsEventCardSelected(false);
      return;
    }

    if (
      isGlobalEventTypeSameAsCard({
        globalEventType: what,
        cardEventType: eventType,
      })
    ) {
      setIsEventCardSelected(false);
      return;
    }
    setIsEventCardSelected(true);

    console.log('click');
  };

  return (
    <CardContainer onClick={handleClick}>
      {isEventCardSelected && (
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1,
          }}
        >
          selected
        </div>
      )}
      <CardImage src={src} alt={alt} />
      <CardLabel label={label} />
    </CardContainer>
  );
};

export default EventTypeCard;
