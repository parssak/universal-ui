import React from 'react';

interface StoryLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function StoryLayout({ className, ...props }: StoryLayoutProps) {
  const classNames = 'min-h-[50vh] w-full p-4 bg-dark-primary-bg dark:bg-light-primary-bg';

  return <div {...props} className={classNames} />;
}
