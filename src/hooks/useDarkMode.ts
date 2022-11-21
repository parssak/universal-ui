import { useUniversalUIConfig } from './../config/UniversalUIConfigContext';
import { useMedia } from './useMedia';

function usePrefersDarkMode() {
  const { darkMode } = useUniversalUIConfig();
  return useMedia(
    ['(prefers-color-scheme: dark)'],
    [true],
    darkMode?.enabled ?? false
  );
}

export const useDarkMode = () => {
  const prefersDarkMode = usePrefersDarkMode();

  // Return enabled state and setter
  return [prefersDarkMode] as const;
};
