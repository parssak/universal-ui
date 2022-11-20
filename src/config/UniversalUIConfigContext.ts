import { createContext, useContext } from 'react';
import { ButtonProps } from '../components/inputs/Button';

export type UniversalUIConfigContextProps = {
  components: {
    button?: string | ((props: ButtonProps) => string);
  };
};

export const UniversalUIConfigContext = createContext<
  UniversalUIConfigContextProps
>({
  components: {
    button: '',
  },
});

export const useUniversalUIConfig = () => {
  return useContext(UniversalUIConfigContext);
};
