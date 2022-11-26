import { useState, useEffect } from 'react';
import { useUniversalUIConfig } from './../config/UniversalUIConfigContext';
import { useMedia } from './useMedia';

function usePrefersDarkMode() {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false);
}

const useClient = () => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return client;
};

export const useDarkMode = () => {
  const prefersDarkMode = usePrefersDarkMode();
  const [stored, setStored] = useState(false);

  const config = useUniversalUIConfig();
  const client = useClient();

  useEffect(() => {
    if (client || !config.ssr) {
      setStored(prefersDarkMode);
    }

    // SSR only
    let t: NodeJS.Timeout;

    if (config.ssr && !client) {
      t = setTimeout(() => setStored(prefersDarkMode), 0);
    }

    return () => t && clearTimeout(t);
  }, [prefersDarkMode, client]);

  return [stored] as const;
};
