import React from 'react';
import { ThemeProvider } from '../../src/config/ThemeProvider';

interface StoryLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function StoryLayout({ className, ...props }: StoryLayoutProps) {
  const classNames =
    'min-h-[50vh] w-full p-4 bg-dark-primary-bg dark:bg-light-primary-bg';

  return (
    <ThemeProvider>
      <div {...props} className={classNames} />
    </ThemeProvider>
  );
}
