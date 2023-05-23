import mockData from '@/data/mockData';
import { eventsResultsState, userSearchDataState } from '@/store';
import {
  getEventsByCategory,
  getThreeUniqueIndexesFromArrayLength,
} from '@/utils/helpers';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export const useUpdateResults = () => {
  const setEventsResults = useSetRecoilState(eventsResultsState);
  const userSearchData = useRecoilValue(userSearchDataState);

  const updateResults = () => {
    const eventsByCategory = getEventsByCategory(mockData, userSearchData.what);
    const indexes = getThreeUniqueIndexesFromArrayLength(
      eventsByCategory.length
    );
    const eventsResults = indexes.map((index) => eventsByCategory[index]);
    setEventsResults(eventsResults);
  };

  return updateResults;
};
