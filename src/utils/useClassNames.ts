import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

export const useClassNames = (
  fn: () => (string | undefined | false | null)[],
  deps: any[]
) => {
  return useMemo(() => {
    const classes = fn();
    return cx(classes);
  }, deps);
};

export const cx = (classes: Array<string | undefined | false | null>) => {
  const c = Array.from(classes).filter(Boolean).join(' ');
  return twMerge(c);
};
