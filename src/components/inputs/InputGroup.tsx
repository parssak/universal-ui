import React from 'react';
import { useUniversalUIConfig } from '../../config/UniversalUIConfigContext';
import {
  forwardRefWithAs,
  Props,
  render,
  unwrapConfigClasses,
} from '../../core';
import { useClassNames } from '../../hooks/useClassNames';
import { GroupBorderOption, Size, Theme, Variant } from '../../types';
import { InputGroupContext } from './InputGroupContext';

export interface InputGroupProps {
  size?: Size;
  theme?: Theme;
  variant?: Variant;
  dark?: boolean;
  borderOption?: GroupBorderOption;
}

const DEFAULT_INPUT_GROUP_TAG = 'div';

const InputGroup = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_INPUT_GROUP_TAG
>(props: Props<TTag> & InputGroupProps, ref: React.Ref<TTag>) {
  const {
    size,
    theme,
    variant = 'solid',
    dark,
    className,
    borderOption = 'right',
    ...rest
  } = props;

  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base = 'inline-flex rounded';
    const configClasses = unwrapConfigClasses('input-group', config, props);
    return [base, configClasses, className];
  });

  return (
    <InputGroupContext.Provider value={{ variant, borderOption }}>
      {render({
        // @ts-ignore
        props: {
          ref,
          className: classNames,
          'data-size': size,
          'data-theme': theme,
          'data-dark': dark,
          ...rest,
        },
        defaultTag: DEFAULT_INPUT_GROUP_TAG,
      })}
    </InputGroupContext.Provider>
  );
});

export { InputGroup };
