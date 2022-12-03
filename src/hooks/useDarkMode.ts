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
  // const config = useUniversalUIConfig();

  useEffect(() => {
    // if (!config.ssr) {
    //   setStored(prefersDarkMode);
    //   return;
    // }

    setStored(prefersDarkMode);
    // if (client) {
    //   return;
    // }

    // SSR only
    // const t = setTimeout(() => setStored(prefersDarkMode), 0);

    // return () => t && clearTimeout(t);
  }, [prefersDarkMode, client]);

  return [stored] as const;
};
