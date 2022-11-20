import { Theme } from '../types';

export const transformTheme = (
  theme: Theme | undefined,
  enabled: boolean,
  dark: boolean | undefined
) => {
  if (theme === undefined) return undefined;

  if (enabled || dark) {
    return `${theme}-dark`;
  }

  return theme;
};
