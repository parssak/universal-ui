import React from 'react';
import { useUniversalUIConfig } from '../../config/UniversalUIConfigContext';
import {
  forwardRefWithAs,
  Props,
  render,
  unwrapConfigClasses,
} from '../../core';
import { useClassNames } from '../../hooks/useClassNames';
import { Size, Theme } from '../../types';

export interface CardProps {
  size?: Size;
  theme?: Theme;
  dark?: boolean;
}

const DEFAULT_CARD_TAG = 'div';

const CardRoot = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_CARD_TAG
>(props: Props<TTag> & CardProps, ref: React.Ref<TTag>) {
  const { size, theme, dark, className, ...rest } = props;
  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base =
      'border border-theme-base rounded-md shadow-sm bg-theme-pure group/card';

    const configClasses = unwrapConfigClasses('card', config, props);

    return [base, configClasses, className];
  });

  return render({
    // @ts-ignore
    props: {
      ref,
      className: classNames,
      'data-size': size,
      'data-theme': theme,
      'data-dark': dark,
      'data-uui': true,
      ...rest,
    },
    defaultTag: DEFAULT_CARD_TAG,
  });
});

export interface CardContentProps {}

const CardContent = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_CARD_TAG
>(props: Props<TTag> & CardContentProps, ref: React.Ref<TTag>) {
  const { className, ...rest } = props;
  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base = 'p-size-x';

    const configClasses = unwrapConfigClasses('card.content', config, props);

    return [base, configClasses, className];
  });

  return render({
    // @ts-ignore
    props: {
      ref,
      className: classNames,
      ...rest,
    },
    defaultTag: DEFAULT_CARD_TAG,
  });
});

export const Card = Object.assign(CardRoot, {
  Content: CardContent,
});
