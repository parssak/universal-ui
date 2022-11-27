import React, { createContext, useContext } from 'react';
import { CardContentProps, CardProps } from '../components/display/Card';
import { TextProps } from '../components/display/Text';
import { ButtonProps } from '../components/inputs/Button';
import { InputProps } from '../components/inputs/Input';

export type UniversalUIConfigContextProps = {
  components: {
    button?: string | ((props: ButtonProps & { inGroup?: boolean }) => string);
    'button.group'?: string | ((props: ButtonProps) => string);
    text?: string | ((props: TextProps) => string);
    input?: string | ((props: InputProps & { inGroup?: boolean }) => string);
    card?: string | ((props: CardProps) => string);
    'card.content'?: string | ((props: CardContentProps) => string);
  };
  ssr?: boolean;
};

export const UniversalUIConfigContext = createContext<
  UniversalUIConfigContextProps
>({
  components: {},
  ssr: false,
});

export const UniversalUIConfigProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: UniversalUIConfigContextProps;
}) => {
  return (
    <UniversalUIConfigContext.Provider value={value}>
      {children}
    </UniversalUIConfigContext.Provider>
  );
};

export const useUniversalUIConfig = () => {
  return useContext(UniversalUIConfigContext);
};
