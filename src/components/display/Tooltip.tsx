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

export interface TooltipProps extends RadixTooltip.TooltipProps {}
const TooltipRoot = ({ delayDuration = 150, ...rest }: TooltipProps) => {
  return <RadixTooltip.Root {...rest} delayDuration={delayDuration} />;
};

const DEFAULT_TOOLTIP_TRIGGER_TAG = 'div';

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
  }, [className, config, props]);

  return (
    <RadixTooltip.Trigger {...rest} asChild>
      {render({
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
}

const TooltipContent = (props: TooltipContentProps) => {
  const { className, sideOffset = 6, theme, size, dark, ...rest } = props;
  const body = useBodyElement();
  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base =
      'bg-theme-inverted rounded-md text-theme-inverted shadow-sm px-size-hx py-size-qx';
    const configClasses = unwrapConfigClasses('tooltip.content', config, props);
    return [base, configClasses, className];
  }, [className, config, props]);

  const arrowClassNames = useClassNames(() => {
    const base = 'fill-theme-inverted stroke-theme-inverted';
    const configClasses = unwrapConfigClasses(
      'tooltip.content_arrow',
      config,
      props
    );

    return [base, configClasses, className];
  }, [className, config, props]);

  return (
    <RadixTooltip.Portal container={body}>
      <RadixTooltip.Content
        {...rest}
        className={classNames}
        sideOffset={sideOffset}
        data-theme={theme}
        data-size={size}
        data-dark={dark}
      >
        {props.children}
        <RadixTooltip.Arrow className={arrowClassNames} />
      </RadixTooltip.Content>
    </RadixTooltip.Portal>
  );
};

export const Tooltip = Object.assign(
  {},
  {
    Root: TooltipRoot,
    Trigger: TooltipTrigger,
    Content: TooltipContent,
  }
);
