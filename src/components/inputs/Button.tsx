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
import { InputGroup } from './InputGroup';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  theme?: Theme;
  variant?: Variant;
  dark?: boolean;
  icon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

const DEFAULT_BUTTON_TAG = 'button';

const ButtonRoot = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_BUTTON_TAG
>(props: Props<TTag> & ButtonProps, ref: React.Ref<TTag>) {
  const {
    size,
    theme,
    variant,
    dark,
    className,
    icon,
    leadingIcon,
    trailingIcon,
    children,
    ...rest
  } = props;
  const config = useUniversalUIConfig();
  const inputGroupContext = useInputGroupContext();
  
  const mounted = useMounted();
  const classNames = useClassNames(() => {
    const base = getInputBaseCx({
      override: 'select-none inline-flex items-center justify-center',
      mounted,
    });

    const sizeClass = getInputSizeCx({
      override: () => {
        if (icon) {
          return 'pl-size-y pr-size-y';
        }
        return '';
      },
    });

    const groupVariantClass = inputGroupContext?.variant;

    const variantClass = getInputVariantCx(
      variant || groupVariantClass || 'solid',
      {
        removeHover: props.disabled,
      }
    );

    const inGroup = inputGroupContext !== null;
    const groupClasses =
      inGroup &&
      getInputGroupItemCx({ borderOption: inputGroupContext?.borderOption });

    const configClasses = unwrapConfigClasses('button', config, {
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

  return render({
    // @ts-ignore
    props: {
      ref,
      className: classNames,
      'data-size': size,
      'data-theme': theme,
      'data-dark': dark,
      children: (
        <>
          {leadingIcon && <InputIcon type="leading">{leadingIcon}</InputIcon>}
          {icon ? <span className="sr-only">{children}</span> : children}
          {icon && <InputIcon type="center">{icon}</InputIcon>}
          {trailingIcon && (
            <InputIcon type="trailing">{trailingIcon}</InputIcon>
          )}
        </>
      ),
      ...rest,
    },
    defaultTag: DEFAULT_BUTTON_TAG,
  });
});

export const Button = Object.assign(ButtonRoot, {
  Group: InputGroup,
});
