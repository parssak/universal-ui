import React from 'react';
import { Props, Size, Theme } from '../types';
import { forwardRefWithAs, render, useClassNames, themes as t } from '../utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: Theme;
  size?: Size;
  variant?: 'contained' | 'outlined' | 'text';
  rounded?: boolean;
}

const DEFAULT_BUTTON_TAG = 'div';


export const Button = forwardRefWithAs(function Button<
  TTag extends React.ElementType = typeof DEFAULT_BUTTON_TAG
>(
  {
    theme = 'primary',
    size = 'md',
    variant = 'contained',
    rounded = false,
    className,
    ...props
  }: Props<TTag> & ButtonProps,
  ref: React.Ref<TTag>
) {
  const classNames = useClassNames(() => {
    const base = `
      inline-flex items-center justify-center
      border-2 border-transparent
      font-medium
      transition-all
      ring-offset-light-bg dark:ring-offset-dark-bg
      focus:outline-none focus:ring-2 focus:ring-offset-1
      cursor-pointer
      select-none
      disabled:cursor-not-allowed disabled:filter disabled:contrast-75
      `;

    const themes = {
      primary: {
        contained: `
          border-light-primary-bg
          dark:border-dark-primary-bg
          ${t.primary['bg']}
          ${t.primary['text']}
          ${t.primary['hover:text-flipped']}
          ${t.primary['hover:bg-flipped']}
          ${t.primary['disabled:text']}
          ${t.primary['disabled:bg']}
        `,
        outlined: `
          ${t.primary['bg-flipped']}
          ${t.primary['text-flipped']}
          ${t.primary['border']}
          ${t.primary['hover:border-active']}
        `,
        text: `
          hover:bg-neutral-100
          dark:hover:bg-neutral-800
          disabled:bg-transparent
          ${t.primary['text-flipped']}
          `,
        ALL: t.primary['ring'],
      },
      secondary: {
        contained: `
          ${t.secondary['bg']}
          ${t.secondary['text']}
          ${t.secondary['border']}
          ${t.secondary['hover:border-active']}
          `,
        outlined: `
          ${t.secondary['border']}
          ${t.secondary['hover:border-active']}
          `,
        text: `
          hover:bg-light-secondary-border-active/20
          disabled:bg-transparent
          `,
        ALL: `
          ${t.secondary['ring']}
          ${t.secondary['text']}
          `,
      },
      info: {
        contained: `
          hover:bg-light-bg
          dark:hover:bg-dark-bg
          ${t.info['text']}
          ${t.info['bg']}
          ${t.info['border']}
          ${t.info['hover:text-active']}
          ${t.info['disabled:text']}
          ${t.info['disabled:bg']}
          `,
        outlined: `
          bg-transparent
          ${t.info['text-active']}
          ${t.info['border']}
          ${t.info['hover:border-active']}
          `,
        text: `
          ${t.info['text-active']}
          hover:bg-light-info-border/20
          dark:hover:bg-light-info-border/30
          disabled:bg-transparent
          disabled:dark:bg-transparent
        `,
        ALL: t.info['ring'],
      },
      success: {
        contained: `
          hover:bg-light-bg
          dark:hover:bg-dark-bg
          ${t.success['text']}
          ${t.success['bg']}
          ${t.success['border']}
          ${t.success['hover:text-active']}
          ${t.success['disabled:text']}
          ${t.success['disabled:bg']}
          `,
        outlined: `
          bg-transparent
          ${t.success['text-active']}
          ${t.success['border']}
          ${t.success['hover:border-active']}
          `,
        text: `
          ${t.success['text-active']}
          hover:bg-light-success-border/20
          dark:hover:bg-light-success-border/30
          disabled:bg-transparent
          disabled:dark:bg-transparent
        `,
        ALL: t.success['ring'],
      },
      error: {
        contained: `
          hover:bg-light-bg
          dark:hover:bg-dark-bg
          ${t.error['text']}
          ${t.error['bg']}
          ${t.error['border']}
          ${t.error['hover:text-active']}
          ${t.error['disabled:text']}
          ${t.error['disabled:bg']}
          `,
        outlined: `
          bg-transparent
          ${t.error['text-active']}
          ${t.error['border']}
          ${t.error['hover:border-active']}
          `,
        text: `
          ${t.error['text-active']}
          hover:bg-light-error-border/20
          dark:hover:bg-light-error-border/30
          disabled:bg-transparent
          disabled:dark:bg-transparent
        `,
        ALL: t.error['ring'],
      },
      warning: {
        contained: `
          hover:bg-light-bg
          dark:hover:bg-dark-bg
          ${t.warning['text']}
          ${t.warning['bg']}
          ${t.warning['border']}
          ${t.warning['hover:text-active']}
          ${t.warning['disabled:text']}
          ${t.warning['disabled:bg']}
          `,
        outlined: `
          bg-transparent
          ${t.warning['text-active']}
          ${t.warning['border']}
          ${t.warning['hover:border-active']}
          `,
        text: `
          ${t.warning['text-active']}
          hover:bg-light-warning-border/20
          dark:hover:bg-light-warning-border/30
          disabled:bg-transparent
          disabled:dark:bg-transparent
        `,
        ALL: t.warning['ring'],
      },
      purple: {
        contained: `
          hover:bg-light-bg
          dark:hover:bg-dark-bg
          ${t.purple['text']}
          ${t.purple['bg']}
          ${t.purple['border']}
          ${t.purple['hover:text-active']}
          ${t.purple['disabled:text']}
          ${t.purple['disabled:bg']}
          `,
        outlined: `
          bg-transparent
          ${t.purple['text-active']}
          ${t.purple['border']}
          ${t.purple['hover:border-active']}
          `,
        text: `
          ${t.purple['text-active']}
          hover:bg-light-purple-border/20
          dark:hover:bg-light-purple-border/30
          disabled:bg-transparent
          disabled:dark:bg-transparent
        `,
        ALL: t.purple['ring'],
      },
    };

    const sizes = {
      xs: 'py-1 px-2 text-xs',
      sm: 'py-1.5 px-3 text-sm',
      md: 'py-2 px-4 text-sm',
      lg: 'py-2 px-4 text-base',
      xl: 'py-2 px-4 text-lg',
    };

    return [
      base,
      ...[themes[theme][variant], themes[theme]['ALL']],
      sizes[size],
      rounded ? 'rounded-full' : 'rounded',
      className,
    ];
  }, [theme, size, variant, rounded, className]);

  return render({
    props: { ref, className: classNames, ...props },
    defaultTag: DEFAULT_BUTTON_TAG,
  });
});

