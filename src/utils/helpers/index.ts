import { palettes } from '@/theme/palettes';
import { Category, EventInterface } from '@/types';
import { THEMES_NAMES } from '@/utils/constants';

export const getDesignTokens = (mode: (typeof THEMES_NAMES)[number]) => {
  if (palettes[mode]) {
    return palettes[mode];
  }

  return palettes.lightTheme;
};

export const getEventsByCategory = (
  events: EventInterface[],
  category: Category | null
) => {
  if (category) {
    return events.filter((event) => event.category === category);
  }
  return events;
};

export const getThreeUniqueIndexesFromArrayLength = (length: number) => {
  if (length === 2) {
    return [0, 1];
  }
  if (length === 1) {
    return [0];
  }

  const indexes = [] as number[];
  while (indexes.length < 3) {
    const randomIndex = Math.floor(Math.random() * length);
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }
  return indexes;
};
