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

export interface CardProps {
  size?: Size;
  theme?: Theme;
  variant?: Variant;
  dark?: boolean;
}

const DEFAULT_CARD_TAG = 'div';

export const Card = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_CARD_TAG
>(props: Props<TTag> & CardProps, ref: React.Ref<TTag>) {
  const { size, theme, variant = 'solid', dark, className, ...rest } = props;
  const [enabled] = useDarkMode();
  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base = 'border border-theme-base/20 rounded-md shadow-sm p-size-x';

    const sizeClass = '';

    const variantClass = '';

    const configClasses = unwrapConfigClasses('card', config, props);

    return [base, sizeClass, variantClass, configClasses, className];
  }, [size, theme, variant, dark, className, config, props]);

  return render({
    props: {
      ref,
      className: classNames,
      'data-size': size,
      'data-theme': transformTheme(theme, enabled, dark),
      ...rest,
    },
    defaultTag: DEFAULT_CARD_TAG,
  });
});
