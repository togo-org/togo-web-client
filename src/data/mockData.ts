import IMAGES from '@/utils/constants/IMAGES';

import { EventInterface } from '@/types';

// get coordinates from: https://www.latlong.net/convert-address-to-lat-long.html

const mockData: EventInterface[] = [
  {
    id: 1,
    name: 'זוזוברה',
    category: 'restaurant',
    address: 'אריה שנקר 7',
    city: 'הרצליה',
    image: IMAGES.CardRestaurant, // TODO: check if need to be `${IMAGES.CardRestaurant}`,
    tags: ['אוכל אסייאתי', 'nature'],
    link: 'https://zozobra.co.il/',
    coordinates: {
      latitude: 32.166,
      longitude: 34.843,
    },
  },
  {
    id: 2,
    name: 'אבו-חסאן',
    category: 'restaurant',
    address: 'הדולפין 1',
    city: 'יפו',
    image: IMAGES.CardRestaurant,
    tags: ['חומוס', 'אוכל ערבי'],
    link: 'https://www.hashulchan.co.il/restaurant/%D7%90%D7%91%D7%95-%D7%97%D7%A1%D7%9F-%D7%94%D7%93%D7%95%D7%9C%D7%A4%D7%99%D7%9F/',
    coordinates: {
      latitude: 32.166,
      longitude: 34.843,
    },
  },
  {
    id: 3,
    name: 'ביר-גארדן',
    category: 'restaurant',
    address: 'מתחם G',
    city: 'כפר סבא',
    image: IMAGES.CardRestaurant,
    tags: ['בשרי', 'אוכל מזרחי'],
    link: 'https://beer-garden.co.il/kfar-saba/',
    coordinates: {
      latitude: 32.166,
      longitude: 34.843,
    },
  },
  {
    id: 4,
    name: 'לונה פארק',
    category: 'attraction',
    address: `שד' ישראל רוקח, גני התערוכה`,
    city: 'תל אביב',
    image: IMAGES.CardAttraction,
    tags: ['בשרי', 'אוכל מזרחי'],
    link: 'https://www.lunapark.co.il/',
    coordinates: {
      latitude: 32.166,
      longitude: 34.843,
    },
  },
  {
    id: 5,
    name: 'סופרלנד',
    category: 'attraction',
    address: 'שדרות מרילנד 5',
    city: 'ראשון לציון',
    image: IMAGES.CardAttraction,
    tags: ['בשרי', 'אוכל מזרחי'],
    link: 'https://www.superland.co.il/',
    coordinates: {
      latitude: 32.166,
      longitude: 34.843,
    },
  },
  {
    id: 6,
    name: 'גן סקאר',
    category: 'attraction',
    address: '?',
    city: 'ירושלים',
    image: IMAGES.CardAttraction,
    tags: ['טבע', 'על האש'],
    link: 'https://www.jda.gov.il/%D7%92%D7%9F-%D7%A1%D7%90%D7%A7%D7%A8/',
    coordinates: {
      latitude: 32.166,
      longitude: 34.843,
    },
  },
  {
    id: 7,
    name: 'נחל הירקון',
    category: 'trip',
    address: '?',
    city: 'תל אביב',
    image: IMAGES.CardTrip,
    tags: ['טבע', 'על האש'],
    link: 'https://www.yarkon-river.org.il/',
    coordinates: {
      latitude: 32.166,
      longitude: 34.843,
    },
  },
  {
    id: 8,
    name: 'מצפה רמון',
    category: 'trip',
    address: 'מצפה רמון',
    city: 'נגב',
    image: IMAGES.CardTrip,
    tags: ['טבע', 'מדבר'],
    link: 'https://mitzpe-ramon.muni.il/',
    coordinates: {
      latitude: 32.166,
      longitude: 34.843,
    },
  },
  {
    id: 9,
    name: 'איצטדיון טדי',
    category: 'trip',
    address: `אגודת ספורט בית"ר 1`,
    city: 'ירושלים',
    image: IMAGES.CardTrip,
    tags: ['טבע', 'על האש'],
    link: 'https://www.beitarfc.co.il/%D7%90%D7%99%D7%A6%D7%98%D7%93%D7%99%D7%95%D7%9F-%D7%98%D7%93%D7%99/',
    coordinates: {
      latitude: 32.166,
      longitude: 34.843,
    },
  },
];

export default mockData;
