// ! For internal use only, do not export from index.ts

import React from 'react';
import { useClassNames } from '../../hooks/useClassNames';

export const InputIcon = ({
  children,
  type = 'center',
}: {
  children: React.ReactNode;
  type?: 'center' | 'leading' | 'trailing';
}) => {
  const classNames = useClassNames(() => {
    const base =
      'h-size-line aspect-square relative flex-shrink-0 scale-75 text-theme-muted';

    const positionClasses = {
      center: '',
      leading: 'relative -left-size-qx ',
      trailing: 'relative -right-size-qx ',
    };

    return [base, positionClasses[type]];
  }, [type]);

  return (
    <span className={classNames} aria-hidden="true">
      {children}
    </span>
  );
};
