'use client';
// ! For internal use only, do not export from index.ts

import React, { forwardRef } from 'react';
import { useClassNames } from '../../hooks/useClassNames';
import { useUniversalUIConfig } from '../../config/UniversalUIConfigContext';
import { unwrapConfigClasses } from '../../core';

export interface InputIconProps {
  type?: 'center' | 'leading' | 'trailing';
}

export const InputIcon = forwardRef<
  HTMLSpanElement,
  InputIconProps & React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => {
  const { children, className, type = 'center' } = props;
  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base =
      'h-size-line aspect-square relative scale-75 text-theme-muted pointer-events-none select-none';

    const positionClasses = {
      center: '',
      leading: 'relative -left-size-qx ',
      trailing: 'relative -right-size-qx ',
    };

    const configClasses = unwrapConfigClasses('input-icon', config, props);

    return [base, positionClasses[type], configClasses, className];
  });

  return (
    <span className={classNames} aria-hidden="true" ref={ref}>
      {children}
    </span>
  );
});
