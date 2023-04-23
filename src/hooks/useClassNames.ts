import { useMemo, useState, useEffect  } from 'react';

import { extendTailwindMerge } from 'tailwind-merge';

export const useClassNames = (
  fn: () => (string | undefined | false | null)[]
) => {
  const classes = fn();
  return cx(classes);
};

export const useMounted = () => { 
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}

export const useMemoizedClassNames = (
  fn: () => (string | undefined | false | null)[],
  deps: React.DependencyList
) => {
  return useMemo(() => {
    const classes = fn();
    return cx(classes);
  }, deps);
};

const SPACING_CLASSES = [
  'size-x',
  'size-y',
  'size-2x',
  'size-2y',
  'size-hx',
  'size-hy',
  'size-qx',
  'size-qy',
  'size-4x',
  'size-4y',
];
const twMerge = extendTailwindMerge({
  classGroups: {
    'font-size': [{ text: ['size'] }],
    'padding-left': [{ pl: SPACING_CLASSES }],
    'padding-right': [{ pr: SPACING_CLASSES }],
    pt: [{ pt: SPACING_CLASSES }],
    pb: [{ pb: SPACING_CLASSES }],
    px: [{ px: SPACING_CLASSES }],
    py: [{ py: SPACING_CLASSES }],
    pr: [{ py: SPACING_CLASSES }],
    pl: [{ py: SPACING_CLASSES }],
    padding: [{ p: SPACING_CLASSES }],
    'margin-left': [{ ml: SPACING_CLASSES }],
    'margin-right': [{ mr: SPACING_CLASSES }],
    'margin-top': [{ mt: SPACING_CLASSES }],
    'margin-bottom': [{ mb: SPACING_CLASSES }],
    'margin-x': [{ mx: SPACING_CLASSES }],
    'margin-y': [{ my: SPACING_CLASSES }],
    margin: [{ m: SPACING_CLASSES }],
    'text-color': [{ text: ['theme-base', 'theme-inverted', 'theme-active'] }],
    leading: [{ leading: ['size'] }],
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
