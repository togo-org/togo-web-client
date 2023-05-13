import { atom, RecoilState } from 'recoil';

import { THEMES_NAMES } from '@/utils/constants';

export const themeState = atom({
	key: 'themeState',
	default: 'lightTheme',
}) as RecoilState<(typeof THEMES_NAMES)[number]>;
