import { useState, useEffect } from 'react';
import { useUniversalUIConfig } from './../config/UniversalUIConfigContext';
import { useMedia } from './useMedia';

function usePrefersDarkMode() {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false);
}

export const useDarkMode = () => {
  const prefersDarkMode = usePrefersDarkMode();
  const [stored, setStored] = useState(false);

  const config = useUniversalUIConfig();

  useEffect(() => { 
    // this only needs to run for ssr projects
    if (!config.ssr) return;

    const t = setTimeout(() => setStored(prefersDarkMode), 0);
    return () => clearTimeout(t);
  }, [prefersDarkMode]);

  // Return enabled state and setter
  return [stored] as const;
};
