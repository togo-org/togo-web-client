import { UserSearchDataInterface } from '@/types';
import { THEMES_NAMES } from '@/utils/constants';
import { atom, RecoilState } from 'recoil';

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
