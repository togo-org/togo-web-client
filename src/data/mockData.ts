import IMAGES from '@/utils/constants/IMAGES';

import { EventInterface } from '@/types';

const mockData: EventInterface[] = [
  {
    id: 1,
    name: 'זוזוברה',
    category: 'restaurant',
    address: 'הרצליה',
    image: IMAGES.CardRestaurant, // TODO: check if need to be `${IMAGES.CardRestaurant}`,
    tags: ['אוכל אסייאתי', 'nature'],
  },
  {
    id: 2,
    name: 'אבו-חסאן',
    category: 'restaurant',
    address: 'יפו',
    image: IMAGES.CardRestaurant,
    tags: ['חומוס', 'אוכל ערבי'],
  },
  {
    id: 3,
    name: 'גן יפו',
    category: 'restaurant',
    address: 'יפו',
    image: IMAGES.CardRestaurant,
    tags: ['בשרי', 'אוכל מזרחי'],
  },
  {
    id: 4,
    name: 'גן יפו',
    category: 'attraction',
    address: 'ירושליים',
    image: IMAGES.CardAttraction,
    tags: ['בשרי', 'אוכל מזרחי'],
  },
  {
    id: 5,
    name: 'דגים',
    category: 'attraction',
    address: 'ירושליים',
    image: IMAGES.CardAttraction,
    tags: ['בשרי', 'אוכל מזרחי'],
  },
  {
    id: 6,
    name: 'גן סקאר',
    category: 'attraction',
    address: 'ירושליים',
    image: IMAGES.CardAttraction,
    tags: ['טבע', 'על האש'],
  },
  {
    id: 7,
    name: 'נחל הירקון',
    category: 'trip',
    address: 'תל אביב',
    image: IMAGES.CardTrip,
    tags: ['טבע', 'על האש'],
  },
  {
    id: 8,
    name: 'מצפה רמון',
    category: 'trip',
    address: 'נגב',
    image: IMAGES.CardTrip,
    tags: ['טבע', 'מדבר'],
  },
  {
    id: 9,
    name: 'איצטדיון טדי',
    category: 'trip',
    address: 'ירושליים',
    image: IMAGES.CardTrip,
    tags: ['טבע', 'על האש'],
  },
];

export default mockData;
