'use client';

import ICONS from '@/utils/constants/ICONS';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ActionsContainer from './_features/ActionsContainer';
import ArrowButton from './_features/ArrowButton';
import useCurrTabName from './useCurrTabName';

const FooterActions = () => {
  const route = useRouter();
  const currTabName = useCurrTabName();
  const setCurrentTabName = useState<string>(currTabName)[1];

  useEffect(() => {
    setCurrentTabName(currTabName);
  }, [currTabName, setCurrentTabName]);

  const getNextTabName = () => {
    switch (currTabName) {
      case 'what':
        return 'how-much';
      case 'how-much':
        return 'when';
      case 'when':
        return 'what';
      default:
        return 'what';
    }
  };

  const getBackTabName = () => {
    switch (currTabName) {
      case 'what':
        return 'when';
      case 'how-much':
        return 'what';
      case 'when':
        return 'how-much';
      default:
        return 'what';
    }
  };

  const handleBackClick = () => {
    const backTabName = getBackTabName();
    route.push(`/select-event/${backTabName}`);
  };

  const handleNextClick = () => {
    const nextTabName = getNextTabName();
    route.push(`/select-event/${nextTabName}`);
  };

  return (
    <ActionsContainer>
      <ArrowButton
        src={ICONS.ArrowBack}
        alt='arrow-left'
        onClick={handleBackClick}
      />
      <ArrowButton
        src={ICONS.ArrowForward}
        alt='arrow-right'
        onClick={handleNextClick}
      />
    </ActionsContainer>
  );
};

export default FooterActions;
