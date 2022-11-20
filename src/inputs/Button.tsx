import React from 'react';
import { Props, Theme } from '../types';
import { forwardRefWithAs, render, useClassNames } from '../utils';

export interface ButtonProps {
  theme?: Theme;
}

const DEFAULT_BUTTON_TAG = 'button';

export const Button = forwardRefWithAs(function Button<
  TTag extends React.ElementType = typeof DEFAULT_BUTTON_TAG
>(
  { className, theme = 'primary', ...props }: Props<TTag> & ButtonProps,
  ref: React.Ref<TTag>
) {
  const classNames = useClassNames(() => {
    const base = 'rounded-md border focus:outline-none transition duration-75';
    const focusClass = 'focus:border-teal-500';
    const sizeClass = 'px-3 h-8 text-base';
    const activeClass = 'motion-safe:active:scale-95'
    const themes: Record<Theme, string> = {
      primary: `
          bg-neutral-900 hover:bg-neutral-800 text-neutral-100 border-neutral-700 active:bg-neutral-700
          dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-100 dark:border-neutral-600 dark:active:bg-neutral-900`,
      secondary: `
          bg-neutral-200 hover:bg-neutral-100 text-neutral-900 border-neutral-50 active:bg-neutral-300
          dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-100 dark:border-neutral-600 dark:active:bg-neutral-900`,
      error: `
          bg-rose-200 hover:bg-rose-100 text-rose-900 border-rose-50 active:bg-rose-300
          dark:bg-rose-800 dark:hover:bg-rose-700 dark:text-rose-100 dark:border-rose-600 dark:active:bg-rose-900`,
      warning: `
          bg-orange-200 hover:bg-orange-100 text-orange-900 border-orange-50 active:bg-orange-300
          dark:bg-orange-800 dark:hover:bg-orange-700 dark:text-orange-100 dark:border-orange-600 dark:active:bg-orange-900`,
      success: `
          bg-emerald-200 hover:bg-emerald-100 text-emerald-900 border-emerald-50 active:bg-emerald-300
          dark:bg-emerald-800 dark:hover:bg-emerald-700 dark:text-emerald-100 dark:border-emerald-600 dark:active:bg-emerald-900`,
      info: `
          bg-sky-200 hover:bg-sky-100 text-sky-900 border-sky-50 active:bg-sky-300
          dark:bg-sky-800 dark:hover:bg-sky-700 dark:text-sky-100 dark:border-sky-600 dark:active:bg-sky-900`,
      purple: `
          bg-fuchsia-200 hover:bg-fuchsia-100 text-fuchsia-900 border-fuchsia-50 active:bg-fuchsia-300
          dark:bg-fuchsia-800 dark:hover:bg-fuchsia-700 dark:text-fuchsia-100 dark:border-fuchsia-600 dark:active:bg-fuchsia-900`,
    } as const;
    const themeClass = themes[theme];
    return [base, sizeClass, themeClass, activeClass, focusClass, className];
  }, [className, theme]);

  return render({
    props: { ref, className: classNames, ...props },
    defaultTag: DEFAULT_BUTTON_TAG,
  });
});
