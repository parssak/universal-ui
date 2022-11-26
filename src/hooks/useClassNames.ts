import { useMemo } from 'react';

import { extendTailwindMerge } from 'tailwind-merge';

export const useClassNames = (
  fn: () => (string | undefined | false | null)[],
  deps: React.DependencyList
) => {
  return useMemo(() => {
    const classes = fn();
    return cx(classes);
  }, deps);
};

const twMerge = extendTailwindMerge({
  classGroups: {
    'font-size': [{ text: ['size'] }],
  },
});

export const cx = (classes: Array<string | undefined | false | null>) => {
  return twMerge(
    Array.from(classes)
      .filter(Boolean)
      .join(' ')
      .replace(/\s+/g, ' ') // remove extra whitespace
      .trim()
  );
};
