import React from 'react';
import { isSSR } from '../core';
import { useDarkMode } from '../hooks/useDarkMode';
import { Theme } from '../types';

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export const ThemeProvider = ({
  theme = 'neutral',
  dark,
  isRoot = false,
  ...props
}: DivProps & {
  theme?: Theme;
  dark?: boolean;
  isRoot?: boolean;
}) => {
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

  return (
    <div
      {...props}
      data-theme={theme}
      data-dark={typeof dark !== 'undefined' ? dark : isRootEnabled()}
    />
  );
};
