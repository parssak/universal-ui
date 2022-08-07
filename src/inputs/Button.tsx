import React from 'react';
import { Props, Theme } from '../types';
import { forwardRefWithAs, render, themes, useClassNames } from '../utils';

export interface ButtonProps {
  theme?: Theme;
}

const DEFAULT_BUTTON_TAG = 'button';

export const Button = forwardRefWithAs(function Button
  <TTag extends React.ElementType = typeof DEFAULT_BUTTON_TAG>(
    { className, theme = 'primary', ...props }: Props<TTag> & ButtonProps,
    ref: React.Ref<TTag>
  ) {

    const classNames = useClassNames(() => {
      const base = 'px-2 py-1';
      const themeClass = themes[theme].bg
      return [base, themeClass, className];
    }, [className, theme]);

    return render({
      props: { ref, className: classNames, ...props },
      defaultTag: DEFAULT_BUTTON_TAG,
    });
  }
);