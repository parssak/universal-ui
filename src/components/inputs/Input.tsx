import React from 'react';
import { useUniversalUIConfig } from '../../config/UniversalUIConfigContext';
import { useClassNames, useMounted } from '../../hooks/useClassNames';
import { Size, Theme, Variant } from '../../types';
import {
  forwardRefWithAs,
  Props,
  render,
  unwrapConfigClasses,
} from '../../core';
import {
  getInputBaseCx,
  getInputGroupItemCx,
  getInputSizeCx,
  getInputVariantCx,
} from './constants';
import { useInputGroupContext } from './InputGroupContext';
import { InputIcon } from './InputIcon';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: Size;
  theme?: Theme;
  variant?: Variant;
  dark?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  inputRef?: React.Ref<HTMLInputElement>;
}

const DEFAULT_INPUT_TAG = 'div';
const INPUT_TAG = 'input';

export const Input = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof INPUT_TAG
>(props: Omit<Props<TTag>, 'size'> & InputProps, ref: React.Ref<TTag>) {
  const {
    size,
    theme,
    variant,
    dark,
    className,
    leadingIcon,
    trailingIcon,
    inputRef,
    ...rest
  } = props;
  const config = useUniversalUIConfig();
  const inputGroupContext = useInputGroupContext();
  const mounted = useMounted();

  const classNames = useClassNames(() => {
    const base = getInputBaseCx({
      override:
        'font-normal placeholder:opacity-50 truncate w-max flex items-center',
      mounted,
    });

    const sizeClass = getInputSizeCx();

    const groupVariantClass = inputGroupContext?.variant;
    const variantClass = getInputVariantCx(
      variant || groupVariantClass || 'solid',
      {
        removeHover: true,
        override: v => {
          switch (v) {
            case 'solid':
              return 'bg-theme-pure border-theme-base';
            default:
              return '';
          }
        },
      }
    );

    const inGroup = inputGroupContext !== null;
    const groupClasses =
      inGroup &&
      getInputGroupItemCx({ borderOption: inputGroupContext?.borderOption });

    const configClasses = unwrapConfigClasses('input', config, {
      ...props,
      inGroup,
    });

    return [
      base,
      sizeClass,
      variantClass,
      groupClasses,
      configClasses,
      className,
    ];
  });

  const inputClassNames = useClassNames(() => {
    const base =
      'bg-transparent focus:outline-none placeholder:text-theme-muted truncate placeholder:opacity-50 w-full disabled:opacity-50 disabled:cursor-not-allowed';

    const configClasses = unwrapConfigClasses('input_inner', config, {
      ...props,
      inGroup: inputGroupContext !== null,
    });

    return [base, configClasses];
  });

  return render({
    props: {
      ref,
      className: classNames,
      'data-size': size,
      'data-theme': theme,
      'data-dark': dark,
      children: (
        <>
          {leadingIcon && <InputIcon type="leading">{leadingIcon}</InputIcon>}
          <input {...rest} className={inputClassNames} ref={inputRef} />
          {trailingIcon && (
            <InputIcon type="trailing">{trailingIcon}</InputIcon>
          )}
        </>
      ),
    },
    defaultTag: DEFAULT_INPUT_TAG,
  });
});
