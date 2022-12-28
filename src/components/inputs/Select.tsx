import React from 'react';
import { useUniversalUIConfig } from '../../config/UniversalUIConfigContext';
import { useClassNames } from '../../hooks/useClassNames';
import { Size, Theme, Variant } from '../../types';
import {
  forwardRefWithAs,
  Props,
  render,
  unwrapConfigClasses,
} from '../../core';
import {
  getInputBaseCx,
  getInputGroupItemCx,
  getInputSizeCx,
  getInputVariantCx,
} from './constants';
import { useInputGroupContext } from './InputGroupContext';
import * as RadixSelect from '@radix-ui/react-select';
import { InputIcon } from './InputIcon';
import { ThemeProvider } from '../../config/ThemeProvider';
import { Text } from '../display/Text';
import { Icon } from '../icons/Icon';

const SelectContext = React.createContext<{
  size?: Size;
  theme?: Theme;
  dark?: boolean;
}>({
  size: 'md',
  theme: 'neutral',
  dark: false,
});

export interface SelectRootProps extends RadixSelect.SelectProps {
  size?: Size;
  theme?: Theme;
  dark?: boolean;
}

const SelectRoot = (props: SelectRootProps) => {
  const { size, theme, dark, children, ...rest } = props;

  return (
    <RadixSelect.Root {...rest}>
      <SelectContext.Provider value={{ size, theme, dark }}>
        {children}
      </SelectContext.Provider>
    </RadixSelect.Root>
  );
};

const DEFAULT_SELECT_TRIGGER_TAG = 'button';

export interface SelectTriggerProps extends RadixSelect.SelectValueProps {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  variant?: Variant;
}

const SelectTrigger = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_SELECT_TRIGGER_TAG
>(props: Props<TTag> & SelectTriggerProps, ref: React.Ref<TTag>) {
  const {
    variant,
    className,
    children,
    leadingIcon,
    trailingIcon = <Icon name="selector" />,
    ...rest
  } = props;

  const config = useUniversalUIConfig();
  const inputGroupContext = useInputGroupContext();
  const { size, theme, dark } = React.useContext(SelectContext);

  const classNames = useClassNames(() => {
    const base = getInputBaseCx({
      override: 'hover:bg-theme-base',
    });

    const sizeClass = getInputSizeCx();

    const groupVariantClass = inputGroupContext?.variant;
    const variantClass = getInputVariantCx(
      variant || groupVariantClass || 'solid',
      {
        override: v => {
          switch (v) {
            case 'solid':
              return 'border-theme-base/20';
            default:
              return '';
          }
        },
      }
    );

    const inGroup = inputGroupContext !== null;
    const groupClasses =
      inGroup &&
      getInputGroupItemCx({ borderOption: inputGroupContext?.borderOption });

    const configClasses = unwrapConfigClasses('select.trigger', config, {
      ...props,
      size,
      theme,
      variant,
      inGroup,
      className,
      leadingIcon,
      trailingIcon,
    });

    return [
      base,
      sizeClass,
      variantClass,
      groupClasses,
      configClasses,
      className,
    ];
  }, [
    config,
    inputGroupContext,
    size,
    theme,
    dark,
    variant,
    className,
    leadingIcon,
    trailingIcon,
  ]);

  return (
    <RadixSelect.Trigger asChild>
      {render({
        props: {
          'data-size': size,
          'data-theme': theme,
          'data-dark': dark,
          className: classNames,
          ref,
          children: (
            <div className="flex items-center justify-between min-w-[15ch]">
              {leadingIcon && (
                <RadixSelect.Icon asChild>
                  <InputIcon type="leading">{leadingIcon}</InputIcon>
                </RadixSelect.Icon>
              )}
              <RadixSelect.Value
                placeholder={rest.placeholder || 'Select an option...'}
                className="inline"
              >
                {children}
              </RadixSelect.Value>
              {trailingIcon && (
                <RadixSelect.Icon asChild>
                  <InputIcon type="trailing">{trailingIcon}</InputIcon>
                </RadixSelect.Icon>
              )}
            </div>
          ),
          ...rest,
        },
        defaultTag: DEFAULT_SELECT_TRIGGER_TAG,
      })}
    </RadixSelect.Trigger>
  );
});

export interface SelectPanelProps extends RadixSelect.SelectPortalProps {
  children: React.ReactNode;
}

const DEFAULT_SELECT_PANEL_TAG = 'div';

const SelectPanel = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_SELECT_PANEL_TAG
>(props: Props<TTag> & SelectPanelProps, ref: React.Ref<TTag>) {
  const { className, children, as: asElement, ...rest } = props;

  const config = useUniversalUIConfig();
  const { size, theme, dark } = React.useContext(SelectContext);

  const classNames = useClassNames(() => {
    const base =
      'bg-theme-pure px-size-qx py-size-qx rounded border border-theme-base shadow-md';
    const configClasses = unwrapConfigClasses('select.panel', config, {
      ...props,
      className,
    });

    return [base, configClasses, className];
  }, [config, className]);

  return (
    <RadixSelect.Portal>
      <ThemeProvider
        theme={theme}
        dark={dark}
        size={size}
        ref={ref}
        as={asElement || DEFAULT_SELECT_PANEL_TAG}
        {...rest}
      >
        <RadixSelect.Content className={classNames}>
          <RadixSelect.ScrollUpButton className="grid place-items-center">
            <InputIcon type="center">
              <Icon name="chevron-down" className="h-size-line rotate-180" />
            </InputIcon>
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className="grid place-items-center">
            <InputIcon type="center">
              <Icon name="chevron-down" className="h-size-line" />
            </InputIcon>
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </ThemeProvider>
    </RadixSelect.Portal>
  );
});

export interface SelectItemProps extends RadixSelect.SelectItemProps {
  theme?: Theme;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

const DEFAULT_SELECT_ITEM_TAG = 'button';

const SelectItem = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_SELECT_ITEM_TAG
>(props: Props<TTag> & SelectItemProps, ref: React.Ref<TTag>) {
  const {
    className,
    children,
    value,
    leadingIcon,
    trailingIcon = <Icon name="check" />,
    ...rest
  } = props;
  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base =
      'flex items-center rounded  w-full text-left border border-transparent ';
    const focusClasses =
      'focus:bg-theme-active/50 focus:border-theme-base/20 focus:outline-none data-[state=checked]:bg-theme-active';

    const sizeClass = getInputSizeCx({
      override: 'pt-size-hy pb-size-hy',
    });

    const configClasses = unwrapConfigClasses('select.item', config, {
      ...props,
      className,
      leadingIcon,
      trailingIcon,
    });

    return [base, focusClasses, sizeClass, configClasses, className];
  }, []);

  return (
    <RadixSelect.Item {...rest} value={value} asChild>
      {render({
        props: {
          className: classNames,
          children: (
            <>
              {leadingIcon && (
                <RadixSelect.ItemIndicator asChild>
                  <InputIcon type="leading">{leadingIcon}</InputIcon>
                </RadixSelect.ItemIndicator>
              )}
              <RadixSelect.ItemText asChild>
                <Text as="span" className="">
                  {children}
                </Text>
              </RadixSelect.ItemText>
              {trailingIcon && (
                <RadixSelect.ItemIndicator asChild>
                  <InputIcon type="trailing" className="ml-auto">
                    {trailingIcon}
                  </InputIcon>
                </RadixSelect.ItemIndicator>
              )}
            </>
          ),
          ref,
        },
        defaultTag: DEFAULT_SELECT_ITEM_TAG,
      })}
    </RadixSelect.Item>
  );
});

export const Select = Object.assign(SelectRoot, {
  Trigger: SelectTrigger,
  Panel: SelectPanel,
  Item: SelectItem,
});