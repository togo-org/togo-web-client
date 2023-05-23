import { StaticImageData } from 'next/image';

export type CustomPaletteModeState = 'light' | 'dark' | 'mystical';

export type UserEventType = 'restaurant' | 'trip' | 'attraction';

export type Category = 'restaurant' | 'trip' | 'attraction';

export interface UserSearchDataInterface {
  what: UserEventType | null;
  howMuch: number;
  when: Date;
}

export interface EventInterface {
  id: number;
  name: string;
  category: Category;
  address: string;
  city: string;
  image: string | StaticImageData;
  tags: string[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
}
