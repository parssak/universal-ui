import React from 'react';
import { forwardRefWithAs, isSSR, Props, render } from '../core';
import { useDarkMode } from '../hooks/useDarkMode';
import { Size, Theme } from '../types';

export interface ThemeProviderProps {
  theme?: Theme;
  size?: Size;
  dark?: boolean;
  inverted?: boolean;
}

const DEFAULT_THEME_PROVIDER_TAG = 'div';

export const ThemeProvider = forwardRefWithAs(function <
  TTag extends React.ElementType = typeof DEFAULT_THEME_PROVIDER_TAG
>(props: Props<TTag> & ThemeProviderProps, ref: React.Ref<TTag>) {
  const { theme = 'neutral', size = 'md', dark, inverted, ...rest } = props;

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

  const isDark = typeof dark !== 'undefined' ? dark : isRootEnabled();

  const isDarkWithInverted = typeof inverted !== 'undefined' ? !isDark : isDark;

  return render({
    props: {
      'data-theme': theme,
      'data-dark': isDarkWithInverted,
      'data-size': size,
      ref,
      ...rest,
    },
    defaultTag: DEFAULT_THEME_PROVIDER_TAG,
  });
});
