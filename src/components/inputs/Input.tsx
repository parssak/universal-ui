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
import {
  getInputBaseCx,
  getInputGroupItemCx,
  getInputSizeCx,
  getInputVariantCx,
} from './constants';
import { useButtonGroupContext } from './ButtonGroupContext';

export interface InputProps {
  size?: Size;
  theme?: Theme;
  variant?: Variant;
  dark?: boolean;
}

const DEFAULT_INPUT_TAG = 'input';

export const Input = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_INPUT_TAG
>(props: Props<TTag> & InputProps, ref: React.Ref<TTag>) {
  const { size, theme, variant, dark, className, ...rest } = props;
  const [enabled] = useDarkMode();
  const config = useUniversalUIConfig();
  const buttonGroupContext = useButtonGroupContext();

  const classNames = useClassNames(() => {
    const base = getInputBaseCx({
      override: 'font-normal placeholder:opacity-50 truncate',
    });

    const sizeClass = getInputSizeCx();

    const groupVariantClass = buttonGroupContext?.variant;
    const variantClass = getInputVariantCx(
      variant || groupVariantClass || 'solid',
      {
        removeHover: true,
      }
    );

    const inGroup = buttonGroupContext !== null;
    const groupClasses =
      inGroup &&
      getInputGroupItemCx({ borderOption: buttonGroupContext?.borderOption });

    const configClasses = unwrapConfigClasses('input', config, {
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
  }, [size, theme, variant, className, config, props]);

  return render({
    props: {
      ref,
      className: classNames,
      'data-size': size,
      'data-theme': transformTheme(theme, enabled, dark),
      ...rest,
    },
    defaultTag: DEFAULT_INPUT_TAG,
  });
});
