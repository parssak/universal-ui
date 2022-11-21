export const isSSR = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.documentElement
);
