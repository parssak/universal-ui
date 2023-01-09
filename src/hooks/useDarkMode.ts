// import { useUniversalUIConfig } from './../config/UniversalUIConfigContext';
import { useState, useEffect } from 'react';
import { useMedia } from './useMedia';
import { useClient } from './useClient';

function usePrefersDarkMode() {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false);
}

export const useDarkMode = () => {
  const prefersDarkMode = usePrefersDarkMode();
  const [stored, setStored] = useState(false);

  const client = useClient();

  useEffect(() => {
    setStored(prefersDarkMode);
  }, [prefersDarkMode, client]);

  return [stored] as const;
};
