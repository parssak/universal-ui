import React from 'react';
import { useUniversalUIConfig } from '../../config/UniversalUIConfigContext';
import { useClassNames } from '../../hooks/useClassNames';
import * as RadixPopover from '@radix-ui/react-popover';

import {
  forwardRefWithAs,
  Props,
  render,
  unwrapConfigClasses,
} from '../../core';
import { useBodyElement } from '../../hooks/useBody';
import { Size, Theme } from '../../types';
import { ThemeProvider } from '../../config/ThemeProvider';

export interface PopoverProps extends RadixPopover.PopoverProps {}
const PopoverRoot = ({ ...rest }: PopoverProps) => {
  return <RadixPopover.Root {...rest} />;
};

const DEFAULT_POPOVER_TRIGGER_TAG = 'div';

export interface PopoverTriggerProps extends RadixPopover.PopoverTriggerProps {}

const PopoverTrigger = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_POPOVER_TRIGGER_TAG
>(props: Props<TTag> & PopoverProps, ref: React.Ref<TTag>) {
  const { className, ...rest } = props;
  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base = 'inline-block';
    const configClasses = unwrapConfigClasses('popover.trigger', config, props);
    return [base, configClasses, className];
  });

  return (
    <RadixPopover.Trigger asChild>
      {render({
        // @ts-ignore
        props: {
          ref,
          className: classNames,
          ...rest,
        },
        defaultTag: DEFAULT_POPOVER_TRIGGER_TAG,
      })}
    </RadixPopover.Trigger>
  );
});

export interface PopoverContentProps extends RadixPopover.PopoverContentProps {
  theme?: Theme;
  dark?: boolean;
  size?: Size;
  arrowClassName?: string;
  container?: HTMLElement | null | undefined;
}

const PopoverContent = (props: PopoverContentProps) => {
  const {
    className,
    sideOffset = 8,
    theme,
    size,
    dark,
    arrowClassName,
    container,
    ...rest
  } = props;
  const body = useBodyElement();
  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base =
      'bg-theme-pure border border-theme-muted rounded text-theme-base shadow-sm z-[51]';
    const sizeClasses = 'pl-size-x pr-size-x pb-size-x pt-size-x text-size';
    const animationClasses =
      'origin-[var(--radix-popover-content-transform-origin)] motion-safe:animate-scale-in motion-reduce:animate-fade-in';
    const configClasses = unwrapConfigClasses('popover.content', config, props);
    return [base, sizeClasses, animationClasses, configClasses, className];
  });

  const arrowClassNames = useClassNames(() => {
    const base = 'fill-theme-muted';

    const configClasses = unwrapConfigClasses(
      'popover.content_arrow',
      config,
      props
    );

    return [base, configClasses, arrowClassName];
  });

  return (
    <RadixPopover.Portal container={container ?? body}>
      <ThemeProvider
        {...rest}
        sideOffset={sideOffset}
        as={RadixPopover.Content}
        theme={theme}
        size={size}
        dark={dark}
        className={classNames}
      >
        {props.children}
        {!arrowClassNames.includes('fill-transparent') && (
          <RadixPopover.Arrow className={arrowClassNames} />
        )}
      </ThemeProvider>
    </RadixPopover.Portal>
  );
};

export const Popover = Object.assign(PopoverRoot, {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
});
