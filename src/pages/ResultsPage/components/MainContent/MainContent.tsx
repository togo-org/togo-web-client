import Card from '@/pages/ResultsPage/components/MainContent/components/Card';
import MainContainer from '@/pages/ResultsPage/components/MainContent/components/MainContainer';
import { eventsResultsState } from '@/store';

import { useRecoilValue } from 'recoil';

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
