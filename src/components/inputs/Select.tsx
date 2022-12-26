import React from 'react';
import { useUniversalUIConfig } from '../../config/UniversalUIConfigContext';
import { useClassNames } from '../../hooks/useClassNames';
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
import * as RadixSelect from '@radix-ui/react-select';

export interface SelectProps {
  size?: Size;
  theme?: Theme;
  variant?: Variant;
  dark?: boolean;
  icon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

const DEFAULT_SELECT_TRIGGER_TAG = 'button';

const SelectRoot = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_SELECT_TRIGGER_TAG
>(props: Props<TTag> & SelectProps, ref: React.Ref<TTag>) {
  const { size, theme, variant, dark, className, ...rest } = props;
  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base = getInputBaseCx()

    const sizeClass = getInputSizeCx();




    return [base, sizeClass, className];
  }, [size, theme, variant, dark]);

  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger asChild>
        {render({
          props: {
            className: classNames,

            ...rest,
          },
          defaultTag: DEFAULT_SELECT_TRIGGER_TAG,
        })}
      </RadixSelect.Trigger>
    </RadixSelect.Root>
  );
});

export const Select = Object.assign(SelectRoot, {});
