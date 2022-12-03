import React from 'react';
import { transformTheme } from '../core';
import { useDarkMode } from '../hooks/useDarkMode';
import { Theme } from '../types';

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export const ThemeProvider = ({
  theme = 'neutral',
  dark,
  ...props
}: DivProps & {
  theme?: Theme;
  dark?: boolean;
}) => {
  const [enabled] = useDarkMode();


  return <div {...props} data-theme={transformTheme(theme, enabled, dark)} />;
};
