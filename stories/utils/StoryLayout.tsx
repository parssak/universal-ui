import React from 'react';
import { ThemeProvider } from '../../src/config/ThemeProvider';
import { cx } from '../../src/hooks/useClassNames';

interface StoryLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function StoryLayout({ className, ...props }: StoryLayoutProps) {
  const classNames =
    cx(['min-h-[50vh] w-full p-4 bg-theme-pure', className]);

  return (
    <ThemeProvider>
      <div {...props} className={classNames} />
    </ThemeProvider>
  );
}
