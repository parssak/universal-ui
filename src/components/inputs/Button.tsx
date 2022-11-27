import React from 'react';
import { useUniversalUIConfig } from '../../config/UniversalUIConfigContext';
import { useDarkMode } from '../../hooks/useDarkMode';
import { useClassNames } from '../../hooks/useClassNames';
import { GroupBorderOption, Size, Theme, Variant } from '../../types';
import {
  forwardRefWithAs,
  Props,
  render,
  unwrapConfigClasses,
  transformTheme,
} from '../../core';
import {
  getInputBaseCx,
  getInputGroupItemCx,
  getInputSizeCx,
  getInputVariantCx,
} from './constants';
import {
  ButtonGroupContext,
  useButtonGroupContext,
} from './ButtonGroupContext';

// For internal use only
const ButtonIcon = ({
  children,
  type = 'center',
}: {
  children: React.ReactNode;
  type?: 'center' | 'leading' | 'trailing';
}) => {
  const classNames = useClassNames(() => {
    const base =
      'h-size-line aspect-square relative flex-shrink-0 scale-75 text-theme-muted';

    const positionClasses = {
      center: '',
      leading: 'relative -left-size-qx ',
      trailing: 'relative -right-size-qx ',
    };

    return [base, positionClasses[type]];
  }, [type]);

  return (
    <span className={classNames} aria-hidden="true">
      {children}
    </span>
  );
};

export interface ButtonProps {
  size?: Size;
  theme?: Theme;
  variant?: Variant;
  dark?: boolean;
  icon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

const DEFAULT_BUTTON_TAG = 'button';

const ButtonRoot = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_BUTTON_TAG
>(props: Props<TTag> & ButtonProps, ref: React.Ref<TTag>) {
  const {
    size,
    theme,
    variant,
    dark,
    className,
    icon,
    leadingIcon,
    trailingIcon,
    children,
    ...rest
  } = props;
  const [enabled] = useDarkMode();
  const config = useUniversalUIConfig();
  const buttonGroupContext = useButtonGroupContext();

  const classNames = useClassNames(() => {
    const base = getInputBaseCx({
      override: 'select-none inline-flex items-center',
    });

    const sizeClass = getInputSizeCx({
      override: () => {
        if (icon) {
          return 'pl-size-y pr-size-y';
        }
        return '';
      },
    });

    const groupVariantClass = buttonGroupContext?.variant;

    const variantClass = getInputVariantCx(
      variant || groupVariantClass || 'solid',
      {
        removeHover: props.disabled,
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

    const inGroup = buttonGroupContext !== null;
    const groupClasses = inGroup ? getInputGroupItemCx() : '';

    const configClasses = unwrapConfigClasses('button', config, {
      ...props,
      inGroup,
    });

    return [
      base,
      sizeClass,
      variantClass,
      groupClasses,
      configClasses,
      className,
    ];
  }, [size, theme, variant, className, config, buttonGroupContext, props]);

  return render({
    props: {
      ref,
      className: classNames,
      'data-size': size,
      'data-theme': transformTheme(theme, enabled, dark),
      children: (
        <>
          {leadingIcon && <ButtonIcon type="leading">{leadingIcon}</ButtonIcon>}
          {children}
          {icon && <ButtonIcon type="center">{icon}</ButtonIcon>}
          {trailingIcon && (
            <ButtonIcon type="trailing">{trailingIcon}</ButtonIcon>
          )}
        </>
      ),
      ...rest,
    },
    defaultTag: DEFAULT_BUTTON_TAG,
  });
});

interface ButtonGroupProps {
  size?: Size;
  theme?: Theme;
  variant?: Variant;
  dark?: boolean;
  borderOption?: GroupBorderOption;
}

const DEFAULT_BUTTON_GROUP_TAG = 'div';

const ButtonGroup = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_BUTTON_GROUP_TAG
>(props: Props<TTag> & ButtonGroupProps, ref: React.Ref<TTag>) {
  const { size, theme, variant = 'solid', dark, className, ...rest } = props;
  const [enabled] = useDarkMode();
  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base = 'inline-flex shadow rounded';
    const configClasses = unwrapConfigClasses('button.group', config, props);
    return [base, configClasses, className];
  }, [config, className]);

  return (
    <ButtonGroupContext.Provider value={{ variant }}>
      {render({
        props: {
          ref,
          className: classNames,
          'data-size': size,
          'data-theme': transformTheme(theme, enabled, dark),
          ...rest,
        },
        defaultTag: DEFAULT_BUTTON_GROUP_TAG,
      })}
    </ButtonGroupContext.Provider>
  );
});

export const Button = Object.assign(ButtonRoot, {
  Group: ButtonGroup,
});
