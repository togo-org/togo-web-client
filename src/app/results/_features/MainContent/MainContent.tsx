'use client';

import { eventsResultsState } from '@/store';
import { useRecoilValue } from 'recoil';
import Card from './_features/Card';
import MainContainer from './_features/MainContainer';

const MainContent = () => {
  const eventsResults = useRecoilValue(eventsResultsState);

  return (
    <MainContainer>
      {eventsResults.map((event) => (
        <Card key={event.id} event={event} />
      ))}
    </MainContainer>
  );
};

export default MainContent;
