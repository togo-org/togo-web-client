import { EventInterface, UserSearchDataInterface } from '@/types';
import { THEMES_NAMES } from '@/utils/constants';
import { RecoilState, atom } from 'recoil';

export const themeState = atom({
  key: 'themeState',
  default: 'lightTheme',
}) as RecoilState<(typeof THEMES_NAMES)[number]>;

export const userSearchDataState = atom({
  key: 'userSearchDataState',
  default: {
    what: null,
    howMuch: 1,
    when: new Date(),
  } as UserSearchDataInterface,
}) as RecoilState<UserSearchDataInterface>;

export const currentSelectEventTabState = atom({
  key: 'currentSelectEventTabState',
  default: 0,
}) as RecoilState<number>;

export const eventsResultsState = atom({
  key: 'eventsResultsState',
  default: [],
}) as RecoilState<EventInterface[] | []>;

export const userLocationState = atom({
  key: 'userLocationState',
  default: {
    lat: 0,
    lng: 0,
  },
}) as RecoilState<{ lat: number; lng: number }>;
