import React, { createContext, useContext, useEffect, useState } from 'react';
import { CardContentProps, CardProps } from '../components/display/Card';
import { TextProps } from '../components/display/Text';
import { ButtonProps } from '../components/inputs/Button';
import { InputProps } from '../components/inputs/Input';
import { InputGroupProps } from '../components/inputs/InputGroup';
import { SelectItemProps, SelectPanelProps, SelectTriggerProps } from '../components/inputs/Select';
import { Size, Theme, Variant } from '../types';

interface CanBeInsideInputGroup {
  inGroup?: boolean;
}

interface WithThemeSizeVariant {
  theme?: Theme;
  size?: Size;
  variant?: Variant;
}

export type UniversalUIConfigContextProps = {
  components: {
    // -- Inputs --
    button?: string | ((props: ButtonProps & CanBeInsideInputGroup) => string);
    'input-group'?: string | ((props: InputGroupProps) => string);
    input?: string | ((props: InputProps & CanBeInsideInputGroup) => string);
    input_inner?:
      | string
      | ((props: InputProps & CanBeInsideInputGroup) => string);
    'select.trigger'?:
      | string
      | ((
          props: SelectTriggerProps &
            CanBeInsideInputGroup &
            WithThemeSizeVariant
        ) => string);
    'select.panel'?: string | ((props: SelectPanelProps) => string);
    'select.item'?: string | ((props: SelectItemProps) => string);
    
    // -- Display --
    text?: string | ((props: TextProps) => string);
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
  config,
}: {
  children: React.ReactNode;
  config: UniversalUIConfigContextProps;
}) => {
  const [v, setV] = useState(
    !config.ssr
      ? config
      : {
          components: {},
        }
  );

  useEffect(() => {
    setV(v);
  }, [config]);

  // if (isSSR) {
  //   return <>{children}</>;
  // }

  return (
    <UniversalUIConfigContext.Provider value={v}>
      {children}
    </UniversalUIConfigContext.Provider>
  );
};

export const useUniversalUIConfig = () => {
  return useContext(
    // @ts-ignore
    typeof createContext === 'function'
      ? UniversalUIConfigContext
      : {
          displayName: 'SSR_MODE',
        }
  );
};
