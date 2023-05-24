import mockData from '@/data/mockData';
import {
  eventsResultsState,
  userLocationState,
  userSearchDataState,
} from '@/store';
import { EventInterface } from '@/types';
import {
  getDistanceBetweenTwoCoordinates,
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

export const useGetDistanceBetweenUserAndEvent = (event: EventInterface) => {
  const userLocation = useRecoilValue(userLocationState);
  const { lat: userLat, lng: userLng } = userLocation;
  const { coordinates } = event;
  const { latitude: eventLat, longitude: eventLng } = coordinates;
  const distance = getDistanceBetweenTwoCoordinates(
    userLat,
    userLng,
    eventLat,
    eventLng
  );
  return distance;
};
