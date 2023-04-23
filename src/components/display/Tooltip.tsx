import React from 'react';
import { useUniversalUIConfig } from '../../config/UniversalUIConfigContext';
import { useClassNames } from '../../hooks/useClassNames';
import * as RadixTooltip from '@radix-ui/react-tooltip';

import {
  forwardRefWithAs,
  Props,
  render,
  unwrapConfigClasses,
} from '../../core';
import { useBodyElement } from '../../hooks/useBody';
import { Size, Theme } from '../../types';
import { ThemeProvider } from '../../config/ThemeProvider';

export interface TooltipProps extends RadixTooltip.TooltipProps {}
const TooltipRoot = ({ delayDuration = 150, ...rest }: TooltipProps) => {
  return <RadixTooltip.Root {...rest} delayDuration={delayDuration} />;
};

const DEFAULT_TOOLTIP_TRIGGER_TAG = 'span';

export interface TooltipTriggerProps extends RadixTooltip.TooltipTriggerProps {}

const TooltipTrigger = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_TOOLTIP_TRIGGER_TAG
>(props: Props<TTag> & TooltipProps, ref: React.Ref<TTag>) {
  const { className, ...rest } = props;
  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base = 'inline-block';
    const configClasses = unwrapConfigClasses('tooltip.trigger', config, props);
    return [base, configClasses, className];
  });

  return (
    <RadixTooltip.Trigger asChild>
      {render({
        // @ts-ignore
        props: {
          ref,
          className: classNames,
          ...rest,
        },
        defaultTag: DEFAULT_TOOLTIP_TRIGGER_TAG,
      })}
    </RadixTooltip.Trigger>
  );
});

export interface TooltipContentProps extends RadixTooltip.TooltipContentProps {
  theme?: Theme;
  dark?: boolean;
  size?: Size;
  arrowClassName?: string;
  container?: HTMLElement | null | undefined;
}

const TooltipContent = (props: TooltipContentProps) => {
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
      'bg-theme-base border border-theme-muted rounded text-theme-base shadow-sm z-[51]';
    const sizeClasses = 'px-size-x py-size-qy text-size';
    const animationClasses =
      'origin-[var(--radix-tooltip-content-transform-origin)] motion-safe:animate-scale-in motion-reduce:animate-fade-in';
    const configClasses = unwrapConfigClasses('tooltip.content', config, props);
    return [base, sizeClasses, animationClasses, configClasses, className];
  });

  const arrowClassNames = useClassNames(() => {
    const base = 'fill-transparent';

    const configClasses = unwrapConfigClasses(
      'tooltip.content_arrow',
      config,
      props
    );

    return [base, configClasses, arrowClassName];
  });

  return (
    <RadixTooltip.Portal container={container ?? body}>
      <ThemeProvider
        {...rest}
        sideOffset={sideOffset}
        as={RadixTooltip.Content}
        theme={theme}
        size={size}
        dark={dark}
        className={classNames}
      >
        {props.children}
        {!arrowClassNames.includes('fill-transparent') && (
          <RadixTooltip.Arrow className={arrowClassNames} />
        )}
      </ThemeProvider>
    </RadixTooltip.Portal>
  );
};

export const Tooltip = Object.assign(TooltipRoot, {
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
});
