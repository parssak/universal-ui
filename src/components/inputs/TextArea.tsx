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
import { getInputBaseCx, getInputSizeCx, getInputVariantCx } from './constants';
import { InputIcon } from './InputIcon';

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  size?: Size;
  theme?: Theme;
  variant?: Variant;
  dark?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  textareaRef?: React.Ref<HTMLTextAreaElement>;
}

const DEFAULT_TEXTAREA_TAG = 'div';
const TEXTAREA_TAG = 'textarea';

export const TextArea = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof TEXTAREA_TAG
>(props: Omit<Props<TTag>, 'size'> & TextAreaProps, ref: React.Ref<TTag>) {
  const {
    size,
    theme,
    variant,
    dark,
    className,
    leadingIcon,
    trailingIcon,
    textareaRef: textareaRef,
    ...rest
  } = props;
  const config = useUniversalUIConfig();
  
  const mounted = useMounted();
  const classNames = useClassNames(() => {
    const base = getInputBaseCx({
      override: 'font-normal placeholder:opacity-50 truncate w-max flex ',
      mounted
    });

    const sizeClass = getInputSizeCx({
      override: 'pl-0 pr-0 pt-0 pb-0',
    });

    // const groupVariantClass = inputGroupContext?.variant;
    const variantClass = getInputVariantCx(variant || 'solid', {
      removeHover: true,
      override: v => {
        switch (v) {
          case 'solid':
            return 'bg-theme-pure border-theme-base';
          default:
            return '';
        }
      },
    });

    // const inGroup = inputGroupContext !== null;
    // const groupClasses =
    //   inGroup &&
    //   getInputGroupItemCx({ borderOption: inputGroupContext?.borderOption });

    const configClasses = unwrapConfigClasses('input', config, {
      ...props,
      // inGroup,
    });

    return [
      base,
      sizeClass,
      variantClass,
      // groupClasses,
      configClasses,
      className,
    ];
  });

  const textareaClassNames = useClassNames(() => {
    const base =
      'bg-transparent focus:outline-none placeholder:text-theme-muted truncate placeholder:opacity-50 w-full disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeClasses = ` ${!!leadingIcon ? '' : 'pl-size-x'} ${
      !!trailingIcon ? '' : 'pr-size-x'
    } pt-size-y pb-size-y `;

    const configClasses = unwrapConfigClasses('input_inner', config, {
      ...props,
      // inGroup: inputGroupContext !== null,
    });

    return [base, sizeClasses, configClasses];
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
          {leadingIcon && (
            <InputIcon
              className="ml-size-x mt-size-y -left-size-hx"
              type="leading"
            >
              {leadingIcon}
            </InputIcon>
          )}
          <textarea
            {...rest}
            className={textareaClassNames}
            ref={textareaRef}
          />
          {trailingIcon && (
            <InputIcon type="trailing"
              className="mr-size-x mt-size-y -right-size-hx"
            >{trailingIcon}</InputIcon>
          )}
        </>
      ),
    },
    defaultTag: DEFAULT_TEXTAREA_TAG,
  });
});
