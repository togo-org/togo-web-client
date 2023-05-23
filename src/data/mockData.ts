import IMAGES from '@/utils/constants/IMAGES';

import { EventInterface } from '@/types';

const mockData: EventInterface[] = [
  {
    id: 1,
    name: 'זוזוברה',
    category: 'restaurant',
    address: 'הרצליה',
    city: 'הרצליה',
    image: IMAGES.CardRestaurant, // TODO: check if need to be `${IMAGES.CardRestaurant}`,
    tags: ['אוכל אסייאתי', 'nature'],
    coordinates: {
      latitude: 32.166,
      longitude: 34.843,
    },
  },
  {
    id: 2,
    name: 'אבו-חסאן',
    category: 'restaurant',
    address: 'יפו',
    city: 'יפו',
    image: IMAGES.CardRestaurant,
    tags: ['חומוס', 'אוכל ערבי'],
    coordinates: {
      latitude: 32.166,
      longitude: 34.843,
    },
  },
  {
    id: 3,
    name: 'גן יפו',
    category: 'restaurant',
    address: 'יפו',
    city: 'יפו',
    image: IMAGES.CardRestaurant,
    tags: ['בשרי', 'אוכל מזרחי'],
    coordinates: {
      latitude: 32.166,
      longitude: 34.843,
    },
  },
  {
    id: 4,
    name: 'גן יפו',
    category: 'attraction',
    address: 'ירושליים',
    city: 'ירושליים',
    image: IMAGES.CardAttraction,
    tags: ['בשרי', 'אוכל מזרחי'],
    coordinates: {
      latitude: 32.166,
      longitude: 34.843,
    },
  },
  {
    id: 5,
    name: 'דגים',
    category: 'attraction',
    address: 'ירושליים',
    city: 'ירושליים',
    image: IMAGES.CardAttraction,
    tags: ['בשרי', 'אוכל מזרחי'],
    coordinates: {
      latitude: 32.166,
      longitude: 34.843,
    },
  },
  {
    id: 6,
    name: 'גן סקאר',
    category: 'attraction',
    address: 'ירושליים',
    city: 'ירושליים',
    image: IMAGES.CardAttraction,
    tags: ['טבע', 'על האש'],
    coordinates: {
      latitude: 32.166,
      longitude: 34.843,
    },
  },
  {
    id: 7,
    name: 'נחל הירקון',
    category: 'trip',
    address: 'תל אביב',
    city: 'תל אביב',
    image: IMAGES.CardTrip,
    tags: ['טבע', 'על האש'],
    coordinates: {
      latitude: 32.166,
      longitude: 34.843,
    },
  },
  {
    id: 8,
    name: 'מצפה רמון',
    category: 'trip',
    address: 'נגב',
    city: 'נגב',
    image: IMAGES.CardTrip,
    tags: ['טבע', 'מדבר'],
    coordinates: {
      latitude: 32.166,
      longitude: 34.843,
    },
  },
  {
    id: 9,
    name: 'איצטדיון טדי',
    category: 'trip',
    address: 'ירושליים',
    city: 'ירושליים',
    image: IMAGES.CardTrip,
    tags: ['טבע', 'על האש'],
    coordinates: {
      latitude: 32.166,
      longitude: 34.843,
    },
  },
];

export default mockData;
