// ! For internal use only, do not export from index.ts

import { GroupBorderOption, Variant } from '../../types';

export const getInputBaseCx = (options?: {
  removeFocus?: boolean;
  override?: (() => string) | string;
  mounted?: boolean;
}) => {
  const base =
    'font-medium tracking-tight rounded border disabled:opacity-75 disabled:cursor-not-allowed';
  
  const mountedStyles = options?.mounted
    ? 'enabled:hover:transition-colors'
    : '';

  const focusStyles = options?.removeFocus
    ? ''
    : 'focus:outline-none ring-0 focus-within:relative transition-[ring] focus-within:z-20 focus:ring focus-within:ring focus:ring-theme-base/50 focus-within:ring-theme-base/50';

  const override = options?.override;

  let overrideStyles = '';

  if (typeof override === 'function') {
    overrideStyles = override();
  } else if (typeof override === 'string') {
    overrideStyles = override;
  }

  return [base, mountedStyles, focusStyles, overrideStyles].join(' ');
};

export const getInputSizeCx = (options?: {
  override?: (() => string) | string;
}) => {
  const base = 'pl-size-x pr-size-x pt-size-y pb-size-y text-size leading-size';

  const override = options?.override;

  let overrideStyles = '';

  if (typeof override === 'function') {
    overrideStyles = override();
  } else if (typeof override === 'string') {
    overrideStyles = override;
  }

  return [base, overrideStyles].join(' ');
};

export const getInputVariantCx = (
  variant: Variant,
  options?: {
    removeHover?: boolean;
    override?: (variant: Variant) => string;
  }
) => {
  const { removeHover, override } = options || {};

  const INPUT_VARIANT_STYLES: Record<Variant, string> = {
    solid: `
      bg-theme-base
      text-theme-base
      placeholder:text-theme-muted
      border-theme-muted group-data-[uui=true]/card:border-theme-base
      ${removeHover ? '' : 'enabled:hover:bg-theme-active'}

      `,
    outline: `
      bg-transparent
      text-theme-base
      placeholder:text-theme-muted
      border-theme-base
      ${removeHover ? '' : 'enabled:hover:bg-theme-active'}
    `,
    ghost: `
      bg-transparent
      text-theme-base hover:text-theme-active
      placeholder:text-theme-muted
      border-transparent
      ${removeHover ? '' : 'enabled:hover:bg-theme-active'}
    `,
    inverted: `
      bg-theme-inverted 
      text-theme-inverted 
      border-theme-inverted
      ${
        removeHover
          ? ''
          : 'enabled:hover:bg-theme-base enabled:hover:text-theme-active'
      }
      `,
  };

  const overrideStyles = override?.(variant) || '';

  return [INPUT_VARIANT_STYLES[variant], overrideStyles].join(' ');
};

export const getInputGroupItemCx = (options?: {
  borderOption?: GroupBorderOption;
}) => {
  const base =
    'shadow-none rounded-none focus:relative focus:z-10 first:rounded-l last:rounded-r ';

  const borderOptions = {
    left: 'border-r-0 last:border-r',
    right: 'border-l-0 first:border-l',
    both: '',
    none: 'first:border-l last:border-r border-0',
  };

  return [base, borderOptions[options?.borderOption || 'both']].join(' ');
};
