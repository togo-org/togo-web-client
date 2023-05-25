import { palettes } from '@/theme/palettes';
import { Category, EventInterface } from '@/types';
import { THEMES_NAMES } from '@/utils/constants';
import DateHelpers from '@/utils/helpers/DateHelpers';

export const getDesignTokens = (mode: (typeof THEMES_NAMES)[number]) => {
  if (palettes[mode]) {
    return palettes[mode];
  }

  return palettes.lightTheme;
};

export const getEventsByCategory = (
  events: EventInterface[],
  category: Category | null
) => {
  if (category) {
    const filteredEvents = events.filter(
      (event) => event.category === category
    );

    return filteredEvents;
  }
  return events;
};

export const getThreeUniqueIndexesFromArrayLength = (length: number) => {
  if (length === 2) {
    return [0, 1];
  }
  if (length === 1) {
    return [0];
  }

  const indexes = [] as number[];
  while (indexes.length < 3) {
    const randomIndex = Math.floor(Math.random() * length);
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }
  return indexes;
};

export const getRadiansFromDegree = (degrees: number): number => {
  return degrees * (Math.PI / 180);
};

export const getDistanceBetweenTwoCoordinates = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const earthRadius = 6371; // Earth's radius in kilometers

  // Convert latitude and longitude to radians
  const lat1Rad = getRadiansFromDegree(lat1);
  const lon1Rad = getRadiansFromDegree(lon1);
  const lat2Rad = getRadiansFromDegree(lat2);
  const lon2Rad = getRadiansFromDegree(lon2);

  // Calculate the differences between coordinates
  const latDiff = lat2Rad - lat1Rad;
  const lonDiff = lon2Rad - lon1Rad;

  // Calculate the square of half the chord length
  const a =
    Math.sin(latDiff / 2) ** 2 +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(lonDiff / 2) ** 2;

  // Calculate the angular distance in radians
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Calculate the distance in kilometers
  const distance = earthRadius * c;

  return distance;
};

export { DateHelpers };
