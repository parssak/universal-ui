import { createContext, useContext } from 'react';
import { TextProps } from '../components/display/Text';
import { ButtonProps } from '../components/inputs/Button';
import { InputProps } from './../components/inputs/Input';

export type UniversalUIConfigContextProps = {
  components: {
    button?: string | ((props: ButtonProps) => string);
    text?: string | ((props: TextProps) => string);
    input?: string | ((props: InputProps) => string);
  };
  darkMode?: {
    enabled?: boolean;
  };
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
