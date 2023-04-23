import React from 'react';
import { useUniversalUIConfig } from '../../config/UniversalUIConfigContext';
import { useClassNames } from '../../hooks/useClassNames';
import * as RadixDialog from '@radix-ui/react-dialog';
import { Card } from './Card';

import {
  forwardRefWithAs,
  Props,
  render,
  unwrapConfigClasses,
} from '../../core';
import { useBodyElement } from '../../hooks/useBody';
import { Size, Theme } from '../../types';
import { ThemeProvider } from '../../config/ThemeProvider';

const DEFAULT_DIALOG_TAG = 'div';

export interface DialogProps extends RadixDialog.DialogProps {
  theme?: Theme;
  dark?: boolean;
  size?: Size;
  container?: HTMLElement | null | undefined;
}

const DialogRoot = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_DIALOG_TAG
>(props: Props<TTag> & DialogProps, ref: React.Ref<TTag>) {
  const {
    className,
    children,
    open,
    defaultOpen,
    onOpenChange,
    modal,
    theme,
    dark,
    size,
    container,
    ...rest
  } = props;
  const config = useUniversalUIConfig();
  const body = useBodyElement();

  const classNames = useClassNames(() => {
    const base =
      'relative max-w-lg w-full transition-none shadow-md data-[state=open]:animate-fade-in';
    const configClasses = unwrapConfigClasses('dialog', config, props);
    return [base, configClasses, className];
  });

  const overlayClassNames = useClassNames(() => {
    const base = 'fixed  inset-0 bg-black/50';
    const configClasses = unwrapConfigClasses('dialog_overlay', config, props);
    return [base, configClasses];
  });

  const rootClassNames = useClassNames(() => {
    const base = 'fixed z-[51] inset-0 grid p-size-x place-items-center';
    const configClasses = unwrapConfigClasses('dialog_root', config, props);
    return [base, configClasses];
  });

  return (
    <RadixDialog.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      modal={modal}
    >
      <RadixDialog.Portal container={container ?? body}>
        <ThemeProvider className={rootClassNames}>
          <RadixDialog.Overlay className={overlayClassNames} />
          <RadixDialog.Content asChild>
            {/* @ts-ignore */}
            <Card
              {...rest}
              className={classNames}
              ref={ref}
              theme={theme}
              size={size}
              dark={dark}
              data-modal={modal}
            >
              {children}
            </Card>
          </RadixDialog.Content>
        </ThemeProvider>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
});

const DEFAULT_DIALOG_CONTENT_TAG = 'div';

const DialogContent = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_DIALOG_TAG
>(props: Props<TTag>, ref: React.Ref<TTag>) {
  const { className, ...rest } = props;
  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base = 'pl-size-x pr-size-x pt-size-x pb-size-x';
    const configClasses = unwrapConfigClasses('dialog.content', config, props);
    return [base, configClasses, className];
  });

  return render({
    // @ts-ignore
    props: {
      ref,
      className: classNames,
      ...rest,
    },
    defaultTag: DEFAULT_DIALOG_CONTENT_TAG,
  });
});

const DEFAULT_DIALOG_TITLE_TAG = 'h3';

const DialogTitle = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_DIALOG_CONTENT_TAG
>(props: Props<TTag>, ref: React.Ref<TTag>) {
  const { className, ...rest } = props;
  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base = 'text-theme-base text-xl font-medium tracking-tight';
    const configClasses = unwrapConfigClasses('dialog.title', config, props);

    return [base, configClasses, className];
  });

  return (
    <RadixDialog.Title asChild>
      {render({
        // @ts-ignore
        props: {
          ref,
          className: classNames,
          ...rest,
        },
        defaultTag: DEFAULT_DIALOG_TITLE_TAG,
      })}
    </RadixDialog.Title>
  );
});

const DEFAULT_DIALOG_DESCRIPTION_TAG = 'p';

const DialogDescription = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_DIALOG_CONTENT_TAG
>(props: Props<TTag>, ref: React.Ref<TTag>) {
  const { className, ...rest } = props;

  const classNames = useClassNames(() => {
    const base = 'text-theme-muted';
    return [base, className];
  });

  return (
    <RadixDialog.Description asChild>
      {render({
        // @ts-ignore
        props: {
          ref,
          className: classNames,
          ...rest,
        },
        defaultTag: DEFAULT_DIALOG_DESCRIPTION_TAG,
      })}
    </RadixDialog.Description>
  );
});

export const Dialog = Object.assign(DialogRoot, {
  Root: DialogRoot,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
});
