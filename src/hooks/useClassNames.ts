import { useMemo } from "react";

export const useClassNames = (
  fn: () => (string | undefined | false | null)[],
  deps: React.DependencyList
) => {
  return useMemo(() => {
    const classes = fn();
    return cx(classes);
  }, deps);
};

export const cx = (classes: Array<string | undefined | false | null>) => {
  return Array.from(classes).filter(Boolean).join(" ");
};
