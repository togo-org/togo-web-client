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
  distance: number;
  image: string;
  tags: string[];
}
