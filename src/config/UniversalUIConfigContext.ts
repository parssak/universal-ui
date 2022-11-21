import { createContext, useContext } from 'react';
import { TextProps } from '../components/display/Text';
import { ButtonProps } from '../components/inputs/Button';

export type UniversalUIConfigContextProps = {
  components: {
    button?: string | ((props: ButtonProps) => string);
    text?: string | ((props: TextProps) => string);
  };
  darkMode?: {
    enabled?: boolean;
  }
};

export const UniversalUIConfigContext = createContext<
  UniversalUIConfigContextProps
>({
  components: {},
  darkMode: {
    enabled: false,
  },
});

export const useUniversalUIConfig = () => {
  return useContext(UniversalUIConfigContext);
};
