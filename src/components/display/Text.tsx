import React, { useMemo } from 'react';
import { useUniversalUIConfig } from '../../config/UniversalUIConfigContext';
import { useDarkMode } from '../../hooks/useDarkMode';
import { useClassNames } from '../../hooks/useClassNames';
import { Size, TextColorVariant, TextStyleVariant, Theme } from '../../types';
import {
  forwardRefWithAs,
  Props,
  render,
  unwrapConfigClasses,
  transformTheme,
} from '../../core';

export interface TextProps {
  size?: Size;
  theme?: Theme;
  colorVariant?: TextColorVariant;
  variant?: TextStyleVariant;
  dark?: boolean;
}

const DEFAULT_TEXT_TAG = 'p';

export const Text = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_TEXT_TAG
>(props: Props<TTag> & TextProps, ref: React.Ref<TTag>) {
  const {
    size,
    theme,
    variant = 'p',
    colorVariant = 'base',
    dark,
    className,
    ...rest
  } = props;
  const [enabled] = useDarkMode();
  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base = '';

    const colorVariants: Record<TextColorVariant, string> = {
      base: `text-theme-base`,
      muted: `text-theme-muted`,
      inverted: `text-theme-inverted`,
      active: `text-theme-active`,
    };

    const styleVariants: Record<TextStyleVariant, string> = {
      h1: `text-4xl   font-semibold tracking-tight`,
      h2: `text-3xl   font-semibold tracking-tight`,
      h3: `text-2xl   font-semibold tracking-tight`,
      h4: `text-xl    font-medium   tracking-tight`,
      h5: `text-base  font-semibold tracking-tight`,
      h6: `text-sm    font-medium   tracking-normal `,
      p: ` text-size  font-normal   tracking-normal leading-size`,
      code: `font-mono border text-size border-theme-base px-1 py-0.5 rounded font-medium whitespace-nowrap leading-size`,
      kbd: `
        font-medium font-sans
        text-size
        bg-theme-base border-theme-base
        border border-b-[2px]
        inline-grid place-items-center
        px-1 py-0.5
        min-w-[1.5rem] min-h-[1.5rem]
        w-fit
        rounded
        text-center leading-none`,
    };

    const configClasses = unwrapConfigClasses('text', config, {
      ...props,
      variant,
      colorVariant,
    });

    return [
      base,
      colorVariants[colorVariant],
      styleVariants[variant],
      configClasses,
      className,
    ];
  }, [size, theme, variant, colorVariant, config, props]);

  const renderElement: React.ElementType = useMemo(() => {
    if (props.as) return props.as;
    if (variant === 'p') return 'p';
    return variant || DEFAULT_TEXT_TAG;
  }, [props.as, variant]);

  return render({
    props: {
      ref,
      className: classNames,
      'data-size': size,
      'data-theme': transformTheme(theme, enabled, dark),
      ...rest,
    },
    defaultTag: renderElement,
  });
});
