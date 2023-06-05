'use client';

import { userSearchDataState } from '@/store';
import { UserEventType } from '@/types';
import { Box } from '@mui/material';
import { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import CardContainer from './_features/CardContainer';
import CardDescription from './_features/CardDescription';
import CardImage from './_features/CardImage';
import CardLabel from './_features/CardLabel';
import ContinueButton from './_features/ContinueButton';

interface EventTypeCardProps {
  label: string;
  src: StaticImageData;
  alt: string;
  eventType: UserEventType;
  description: string;
}

const EventTypeCard = ({
  label,
  src,
  alt,
  eventType,
  description,
}: EventTypeCardProps) => {
  const userSearchData = useRecoilValue(userSearchDataState);
  const setUserSearchData = useSetRecoilState(userSearchDataState);
  const { what } = userSearchData;
  const [isEventCardSelected, setIsEventCardSelected] = useState(false);

  const handleClick = () => {
    if (what === eventType) {
      setUserSearchData((prev) => ({ ...prev, what: null }));
    } else {
      setUserSearchData((prev) => ({ ...prev, what: eventType }));
    }
  };

  useEffect(() => {
    if (what === eventType) {
      setIsEventCardSelected(true);
    } else {
      setIsEventCardSelected(false);
    }
  }, [what, eventType]);

  return (
    <CardContainer onClick={handleClick}>
      {isEventCardSelected ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 1,
            }}
          />
          <CardImage src={src} alt={alt} />
          <CardDescription description={description} />
          <CardLabel label={label} />
          <ContinueButton />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CardImage src={src} alt={alt} />
          <CardLabel label={label} />
        </Box>
      )}
    </CardContainer>
  );
};

export default EventTypeCard;
