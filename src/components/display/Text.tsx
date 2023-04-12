import React, { useMemo } from 'react';
import { useUniversalUIConfig } from '../../config/UniversalUIConfigContext';
import { useClassNames } from '../../hooks/useClassNames';
import { Size,  TextStyleVariant, Theme } from '../../types';
import {
  forwardRefWithAs,
  Props,
  render,
  unwrapConfigClasses,
} from '../../core';

export interface TextProps {
  size?: Size;
  theme?: Theme;
  variant?: TextStyleVariant;
  dark?: boolean;
}

const DEFAULT_TEXT_TAG = 'p';

export const Text = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_TEXT_TAG
>(props: Props<TTag> & TextProps, ref: React.Ref<TTag>) {
  const { size, theme, variant = 'p', dark, className, ...rest } = props;

  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base = 'text-theme-base';

    const styleVariants: Record<TextStyleVariant, string> = {
      h1: `text-4xl   font-semibold tracking-tight`,
      h2: `text-3xl   font-semibold tracking-tight`,
      h3: `text-2xl   font-semibold tracking-tight`,
      h4: `text-xl    font-medium   tracking-tight`,
      h5: `text-base  font-semibold tracking-tight`,
      h6: `text-sm    font-medium   tracking-normal `,
      p: ` text-size  font-normal   tracking-normal leading-size`,
      code: `font-mono border text-size bg-theme-pure border-theme-base px-1 py-0.5 rounded font-medium whitespace-nowrap leading-size`,
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
    });

    return [base, styleVariants[variant], configClasses, className];
  });

  const renderElement: React.ElementType = useMemo(() => {
    if (props.as) return props.as;
    if (variant === 'p') return 'p';
    return variant || DEFAULT_TEXT_TAG;
  }, [props.as, variant]);

  return render({
    // @ts-ignore
    props: {
      ref,
      className: classNames,
      'data-size': size,
      'data-theme': theme,
      'data-dark': dark,
      ...rest,
    },
    defaultTag: renderElement,
  });
});
