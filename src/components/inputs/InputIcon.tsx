// ! For internal use only, do not export from index.ts

import React, { forwardRef } from 'react';
import { useClassNames } from '../../hooks/useClassNames';

export const InputIcon = forwardRef<
  HTMLSpanElement,
  {
    children: React.ReactNode;
    className?: string;
    type?: 'center' | 'leading' | 'trailing';
  }
>((props, ref) => {
  const { children, className, type = 'center' } = props;

  const classNames = useClassNames(() => {
    const base = 'h-size-line aspect-square relative scale-75 text-theme-muted pointer-events-none select-none';

    const positionClasses = {
      center: '',
      leading: 'relative -left-size-qx ',
      trailing: 'relative -right-size-qx ',
    };

    return [base, positionClasses[type], className];
  }, [type]);

  return (
    <span className={classNames} aria-hidden="true" ref={ref}>
      {children}
    </span>
  );
});
