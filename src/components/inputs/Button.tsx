import React from 'react';
import { useUniversalUIConfig } from '../../config/UniversalUIConfigContext';
import { useDarkMode } from '../../hooks/useDarkMode';
import { useClassNames } from '../../hooks/useClassNames';
import { Size, Theme, Variant } from '../../types';
import {
  forwardRefWithAs,
  Props,
  render,
  unwrapConfigClasses,
  transformTheme,
} from '../../core';
import { getInputBaseCx, getInputSizeCx, getInputVariantCx } from './constants';

export interface ButtonProps {
  size?: Size;
  theme?: Theme;
  variant?: Variant;
  dark?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

const ButtonIcon = ({
  children,
  type = 'center',
}: {
  children: React.ReactNode;
  type?: 'center' | 'leading' | 'trailing';
}) => {
  
  const classNames = useClassNames(() => {
    const base =
      'h-size-line aspect-square relative flex-shrink-0 scale-75';

    const positionClasses = {
      center: '',
      leading: 'relative -left-size-qx',
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

const DEFAULT_BUTTON_TAG = 'button';

export const Button = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_BUTTON_TAG
>(props: Props<TTag> & ButtonProps, ref: React.Ref<TTag>) {
  const {
    size,
    theme,
    variant = 'solid',
    dark,
    className,
    leadingIcon,
    trailingIcon,
    icon,
    children,
    ...rest
  } = props;
  const [enabled] = useDarkMode();
  const config = useUniversalUIConfig();

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

    const variantClass = getInputVariantCx(variant, {
      removeHover: props.disabled,
      override: v => {
        switch (v) {
          case 'solid':
            return 'border-theme-base/20';
          default:
            return '';
        }
      },
    });

    const configClasses = unwrapConfigClasses('button', config, props);

    return [base, sizeClass, variantClass, configClasses, className];
  }, [size, theme, variant, dark, className, config, props]);

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
