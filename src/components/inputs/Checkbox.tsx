import React, { forwardRef } from 'react';
import { useUniversalUIConfig } from '../../config/UniversalUIConfigContext';
import { useClassNames } from '../../hooks/useClassNames';
import { Size, Theme } from '../../types';
import { unwrapConfigClasses } from '../../core';
import { getInputBaseCx } from './constants';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { Icon } from '../icons/Icon';

export interface CheckboxProps
  extends Omit<RadixCheckbox.CheckboxProps, 'children'> {
  size?: Size;
  theme?: Theme;
  dark?: boolean;
}

const CheckboxRoot = forwardRef(
  (props: CheckboxProps, ref: React.Ref<HTMLButtonElement>) => {
    const { size, theme, dark, className, ...rest } = props;
    const config = useUniversalUIConfig();

    const classNames = useClassNames(() => {
      const base = getInputBaseCx({
        override: 'bg-theme-base/40 border-theme-muted',
      });

      const sizeClass = 'w-size-2x h-size-2x';

      const configClasses = unwrapConfigClasses('checkbox', config, props);

      return [base, sizeClass, configClasses, className];
    }, [size, theme, dark, className, config, props]);

    return (
      <RadixCheckbox.Root
        {...rest}
        className={classNames}
        ref={ref}
        data-theme={theme}
        data-dark={dark}
        data-size={size}
      >
        <RadixCheckbox.Indicator>
          <Icon name="check" className="text-theme-base/80" />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    );
  }
);

export const Checkbox = Object.assign(CheckboxRoot, {});
