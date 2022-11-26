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
}

const DEFAULT_BUTTON_TAG = 'button';

export const Button = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_BUTTON_TAG
>(props: Props<TTag> & ButtonProps, ref: React.Ref<TTag>) {
  const { size, theme, variant = 'solid', dark, className, ...rest } = props;
  const [enabled] = useDarkMode();
  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base = getInputBaseCx({
      override: 'select-none',
    });

    const sizeClass = getInputSizeCx();

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
      ...rest,
    },
    defaultTag: DEFAULT_BUTTON_TAG,
  });
});
