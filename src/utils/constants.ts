import { themes as t } from './styles';

export const INPUT_TEXT_SIZES = {
  xs: 'text-xs',
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-sm',
  xl: 'text-base',
};

export const INPUT_PADDING_SIZES = {
  xs: 'py-1 px-2',
  sm: 'py-1.5 px-3',
  md: 'py-1.5 px-3',
  lg: 'py-2.5 px-3.5',
  xl: 'py-2 px-4',
};

export const INPUT_SIZES = {
  xs: `${INPUT_PADDING_SIZES.xs} ${INPUT_TEXT_SIZES.xs}`,
  sm: `${INPUT_PADDING_SIZES.sm} ${INPUT_TEXT_SIZES.sm}`,
  md: `${INPUT_PADDING_SIZES.md} ${INPUT_TEXT_SIZES.md}`,
  lg: `${INPUT_PADDING_SIZES.lg} ${INPUT_TEXT_SIZES.lg}`,
  xl: `${INPUT_PADDING_SIZES.xl} ${INPUT_TEXT_SIZES.xl}`,
};

export const ICON_SIZES = {
  xs: 'w-3 h-3',
  sm: 'w-3 h-3',
  md: 'w-3.5 h-3.5',
  lg: 'w-4 h-4',
  xl: 'w-5 h-5',
};

export const INPUT_COMMON_STYLES = `
  block
  border
  w-full
  rounded
  focus:outline-none
  transition-[border]
  disabled:cursor-not-allowed
`;

const INPUT_ERROR_STYLES = `
  ${t.error['border']}
  ${t.error['focus:border-active']}
  ${t.error['text-active']}
  placeholder-light-error-bg/40
`;

export const INPUT_PRIMARY_THEME = ({
  error,
  textAsPlaceholder,
  manualDisabled,
}: {
  error: boolean;
  textAsPlaceholder?: boolean;
  manualDisabled?: boolean;
}) => `
  disabled:bg-light-primary-border/30
  disabled:bg-dark-primary-border/30
  disabled:cursor-not-allowed
  ${t.primary['bg-flipped']}
  ${t.primary['text-flipped']}
  ${t.primary['border']}
  ${t.primary['focus:border-active']}
  ${t.primary['focus-within:border-active']}
  ${
    error
      ? INPUT_ERROR_STYLES
      : `
    placeholder-neutral-300
    dark:placeholder-neutral-500
    disabled:placeholder-neutral-400
    dark:disabled:placeholder-neutral-700
  `
  }
  ${
    textAsPlaceholder
      ? `text-neutral-300 dark:text-neutral-500 disabled:text-neutral-400 dark:disabled:text-neutral-700`
      : ''
  }
  ${
    // TODO: MAKE THIS NOT IMPORTANT SELECTORS
    manualDisabled
      ? `
      !bg-light-primary-border/30
      !bg-dark-primary-border/30
      cursor-not-allowed
      ${
        !error
          ? `
        !placeholder-neutral-400
        dark:!placeholder-neutral-700
      `
          : ''
      }
      ${
        textAsPlaceholder
          ? `
          !text-neutral-400
          dark:!text-neutral-700
        `
          : ''
      }
    `
      : ''
  }
`;
