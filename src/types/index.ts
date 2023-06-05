import { SxProps } from '@mui/material';
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
  link?: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface SvgProps {
  color?:
    | 'secondary'
    | 'disabled'
    | 'action'
    | 'inherit'
    | 'primary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
  d?: string;
  fontSize: 'inherit' | 'small' | 'large' | 'medium';
  sx?: SxProps;
}

export type SelectEventTabLabels = 'what' | 'how-much' | 'when';
