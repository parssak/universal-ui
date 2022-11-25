import { Variant } from '../../types';

export const getInputBaseCx = (options?: { removeFocus?: boolean }) => {
  const base =
    'font-medium tracking-tight rounded transition-colors duration-75 border shadow';
  const focusStyles = 'focus:outline-none focus:ring focus:ring-theme-base/50';
  return [base, options?.removeFocus ? '' : focusStyles].join(' ');
};

export const getInputSizeCx = () => {
  return 'pl-size-x pr-size-x pt-size-y pb-size-y text-size leading-size';
};

export const getInputVariantCx = (
  variant: Variant,
  options?: {
    removeHover?: boolean;
  }
) => {
  const { removeHover } = options || {};
  const INPUT_VARIANT_STYLES: Record<Variant, string> = {
    solid: `
      bg-theme-base
      text-theme-base
      border-theme-base
      ${removeHover ? '' : 'hover:bg-theme-active'}
      `,
    outline: `
      bg-transparent
      text-theme-base
      border-theme-base
      ${removeHover ? '' : 'hover:bg-theme-active'}
    `,
    ghost: `
      bg-transparent
      text-theme-base hover:text-theme-active
      border-transparent
      ${removeHover ? '' : 'hover:bg-theme-active'}
    `,
    inverted: `
      bg-theme-inverted 
      text-theme-inverted 
      border-theme-inverted
      ${removeHover ? '' : 'hover:bg-theme-base hover:text-theme-active'}
      `,
  };
  return INPUT_VARIANT_STYLES[variant];
};
