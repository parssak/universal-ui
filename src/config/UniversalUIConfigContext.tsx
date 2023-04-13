import React, { createContext, useContext, useEffect, useState } from 'react';
import { CardContentProps, CardProps } from '../components/display/Card';
import { TextProps } from '../components/display/Text';
import { ButtonProps } from '../components/inputs/Button';
import { InputProps } from '../components/inputs/Input';
import { InputGroupProps } from '../components/inputs/InputGroup';
import * as Tooltip from '@radix-ui/react-tooltip';
import {
  SelectItemProps,
  SelectPanelProps,
  SelectTriggerProps,
} from '../components/inputs/Select';
import { Size, Theme, Variant } from '../types';
import {
  TooltipContentProps,
  TooltipTriggerProps,
} from '../components/display/Tooltip';
import { ThemeProvider, ThemeProviderProps } from './ThemeProvider';
import { ModalProps } from '../components/display/Modal';

interface CanBeInsideInputGroup {
  inGroup?: boolean;
}

interface WithClassName {
  className?: string;
}

interface WithThemeSizeVariant {
  theme?: Theme;
  size?: Size;
  variant?: Variant;
}

export type UniversalUIConfigContextProps = {
  components: {
    // -- Inputs --
    button?:
      | string
      | ((
          props: ButtonProps & CanBeInsideInputGroup & WithClassName
        ) => string);
    checkbox?: string | ((props: InputProps & WithClassName) => string);
    'input-group'?:
      | string
      | ((props: InputGroupProps & WithClassName) => string);
    input?:
      | string
      | ((props: InputProps & CanBeInsideInputGroup & WithClassName) => string);
    input_inner?:
      | string
      | ((props: InputProps & CanBeInsideInputGroup & WithClassName) => string);
    'select.trigger'?:
      | string
      | ((
          props: SelectTriggerProps &
            CanBeInsideInputGroup &
            WithThemeSizeVariant &
            WithClassName
        ) => string);
    'select.panel'?:
      | string
      | ((props: SelectPanelProps & WithClassName) => string);
    'select.item'?:
      | string
      | ((props: SelectItemProps & WithClassName) => string);
    'select.item_text'?:
      | string
      | ((props: SelectItemProps & WithClassName) => string);

    // -- Display --
    text?: string | ((props: TextProps & WithClassName) => string);
    card?: string | ((props: CardProps & WithClassName) => string);
    'card.content'?:
      | string
      | ((props: CardContentProps & WithClassName) => string);
    modal?: string | ((props: ModalProps & WithClassName) => string);
    modal_overlay?: string | ((props: ModalProps & WithClassName) => string);
    modal_root?: string | ((props: ModalProps & WithClassName) => string);
    'modal.content'?: string | ((props: WithClassName) => string);
    'modal.title'?: string | ((props: WithClassName) => string);
    'tooltip.trigger'?:
      | string
      | ((props: TooltipTriggerProps & WithClassName) => string);
    'tooltip.content'?:
      | string
      | ((props: TooltipContentProps & WithClassName) => string);
    'tooltip.content_arrow'?:
      | string
      | ((props: TooltipContentProps & WithClassName) => string);
    popover?: string | ((props: WithClassName) => string);
    'popover.trigger'?: string | ((props: WithClassName) => string);
    'popover.content'?: string | ((props: WithClassName) => string);
    'popover.content_arrow'?: string | ((props: WithClassName) => string);
  };
  providers?: {
    tooltip?: Omit<Tooltip.TooltipProviderProps, 'children'>;
    theme?: Omit<ThemeProviderProps, 'children'>;
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
  config?: UniversalUIConfigContextProps;
}) => {
  const [v, setV] = useState(
    !config?.ssr
      ? config
      : {
          components: {},
        }
  );

  useEffect(() => {
    setV(v);
  }, [config]);

  return (
    <UniversalUIConfigContext.Provider value={v ?? { components: {} }}>
      <ThemeProvider {...config?.providers?.theme}>
        <Tooltip.Provider {...config?.providers?.tooltip}>
          {children}
        </Tooltip.Provider>
      </ThemeProvider>
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
