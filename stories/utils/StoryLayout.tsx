import React from 'react';
import { useClassNames } from '../../src/utils';

interface StoryLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function StoryLayout({ className, ...props }: StoryLayoutProps) {
  const classNames = useClassNames(() => {
    const base =
      'min-h-[50vh] w-full p-4 bg-dark-primary-bg dark:bg-light-primary-bg';
    return [base, className];
  }, [className]);
  return <div {...props} className={classNames} />;
}
