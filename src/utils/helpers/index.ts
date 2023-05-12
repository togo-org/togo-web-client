import { palettes } from '@/theme/palettes';
import { THEMES_NAMES } from '@/utils/constants';

export const getDesignTokens = (mode: (typeof THEMES_NAMES)[number]) => {
	if (palettes[mode]) {
		return palettes[mode];
	}

	return palettes.lightTheme;
};
