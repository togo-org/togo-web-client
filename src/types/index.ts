export type CustomPaletteModeState = 'light' | 'dark' | 'mystical';

export type UserEventType = 'restaurant' | 'trip' | 'attraction';

export interface UserSearchDataInterface {
  what: UserEventType | null;
  howMuch: number;
  when: Date;
}
