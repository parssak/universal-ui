import React from 'react';
import { forwardRefWithAs, isSSR, Props, render } from '../core';
import { useDarkMode } from '../hooks/useDarkMode';
import { Size, Theme } from '../types';

export interface ThemeProviderProps {
  theme?: Theme;
  size?: Size;
  dark?: boolean;
}

const DEFAULT_THEME_PROVIDER_TAG = 'div';

export const ThemeProvider = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_THEME_PROVIDER_TAG
>(props: Props<TTag> & ThemeProviderProps, ref: React.Ref<TTag>) {
  const {
    theme = 'neutral',
    size = 'md',
    dark,

    ...rest
  } = props;

  const [enabled] = useDarkMode();

  const isRootEnabled = () => {
    if (!isSSR) return enabled;

    if (
      typeof window !== 'undefined' &&
      typeof document !== 'undefined' &&
      window &&
      document &&
      document.body.dataset.theme?.includes('dark')
    )
      return true;
    return false;
  };

  return render({
    props: {
      'data-theme': theme,
      'data-dark': typeof dark !== 'undefined' ? dark : isRootEnabled(),
      'data-size': size,
      ref,
      ...rest,
    },
    defaultTag: DEFAULT_THEME_PROVIDER_TAG,
  });
});
