import React, { useMemo } from 'react';
import { Props } from '../types';
import { forwardRefWithAs, render, themes, useClassNames } from '../utils';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'label'
  | 'code'
  | 'kbd';

export interface TextProps {
  variant?: TextVariant;
}

const DEFAULT_TEXT_TAG = 'p';

export const Text = forwardRefWithAs(function Text<
  TTag extends React.ElementType = typeof DEFAULT_TEXT_TAG
>(
  { className, variant = 'body1', ...props }: Props<TTag> & TextProps,
  ref: React.Ref<TTag>
) {
  const renderElement: React.ElementType = useMemo(() => {
    if (props.as) return props.as;
    if (variant === 'body1' || variant === 'body2') return 'p';
    if (variant === 'button' || variant === 'caption') return 'span';
    if (variant === 'label') return 'label';
    return variant;
  }, [props.as, variant]);

  const classNames = useClassNames(() => {
    const base = '';
    const variants = {
      h1: `     text-5xl    font-semibold tracking-tight  ${themes.primary['text-flipped']}`,
      h2: `     text-3xl    font-semibold tracking-tight  ${themes.primary['text-flipped']}`,
      h3: `     text-xl     font-medium   tracking-normal ${themes.primary['text-flipped']}`,
      h4: `     text-lg     font-bold     tracking-tight  ${themes.secondary['text']}`,
      h5: `     text-md     font-semibold tracking-tight  ${themes.secondary['text']}`,
      h6: `     text-xs     font-medium   tracking-normal ${themes.secondary['text']}`,
      body1: `  text-base     font-normal   tracking-normal ${themes.secondary['text-active']}`,
      body2: `  text-sm     font-normal   tracking-normal ${themes.secondary['text']}`,
      caption: `text-xs     font-normal   tracking-normal ${themes.secondary['text']}`,
      button: ` text-base     font-medium   tracking-normal ${themes.primary['text-flipped']}`,
      label: `  text-xs     font-medium   tracking-normal ${themes.secondary['text']} block`,
      code: `font-mono ${themes.secondary['bg-active']} ${themes.secondary['text']} p-0.5 rounded`,
      kbd: `
        font-medium
        font-sans text-xs
        ${themes.secondary['text']}
        bg-light-primary-bg-active dark:bg-dark-secondary-bg-active
        border-light-primary-border dark:border-dark-primary-bg-active
        border-b-2
        grid place-items-center
        px-1.5 py-1.5
        min-w-[1.5rem] min-h-[1.5rem]
        inline-block rounded
        text-center leading-none`,
    };

    return [base, variants[variant], className];
  }, [variant, className]);

  return render({
    props: { ref, className: classNames, ...props },
    defaultTag: renderElement,
  });
});
