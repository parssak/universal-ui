import { Theme } from '../types';

export const transformTheme = (
  theme: Theme | undefined,
  enabledDarkMode: boolean,
  isDarkModeMedia: boolean | undefined
) => {
  if (theme === undefined) return undefined;

  if (enabledDarkMode || isDarkModeMedia) {
    return `${theme}-dark`;
  }

  return theme;
};
