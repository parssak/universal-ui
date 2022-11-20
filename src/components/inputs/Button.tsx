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

export interface ButtonProps {
  size?: Size;
  theme?: Theme;
  variant?: Variant;
  dark?: boolean;
}

const DEFAULT_BUTTON_TAG = 'button';

export const Button = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_BUTTON_TAG
>(props: Props<TTag> & ButtonProps, ref: React.Ref<TTag>) {
  const { size, theme, variant = 'solid', dark, className, ...rest } = props;
  const [enabled] = useDarkMode();
  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base =
      'font-medium tracking-tight rounded transition-all duration-75 border shadow';

    const sizeClass =
      'pl-size-x pr-size-x pt-size-y pb-size-y text-size leading-size';

    const variants: Record<Variant, string> = {
      solid: `
      bg-theme-base hover:bg-theme-active
      text-theme-base
      border-theme-base
    `,
      outline: `
      bg-transparent hover:bg-theme-active
      text-theme-base
      border-theme-base
    `,
      ghost: `
      bg-transparent hover:bg-theme-active
      text-theme-base hover:text-theme-active
      border-transparent
    `,
      inverted: `
      bg-theme-inverted hover:bg-theme-base
      text-theme-inverted hover:text-theme-active
      border-theme-inverted
      `,
    };

    const configClasses = unwrapConfigClasses('button', config, props);

    return [base, sizeClass, variants[variant], configClasses, className];
  }, [props]);

  return render({
    props: {
      ref,
      className: classNames,
      'data-size': size,
      'data-theme': transformTheme(theme, enabled, dark),
      ...rest,
    },
    defaultTag: DEFAULT_BUTTON_TAG,
  });
});
