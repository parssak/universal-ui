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

const DEFAULT_MODAL_TAG = 'div';

export interface ModalProps extends RadixDialog.DialogProps {
  theme?: Theme;
  dark?: boolean;
  size?: Size;
  container?: HTMLElement | null | undefined;
}

const ModalRoot = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_MODAL_TAG
>(props: Props<TTag> & ModalProps, ref: React.Ref<TTag>) {
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
    const configClasses = unwrapConfigClasses('modal', config, props);
    return [base, configClasses, className];
  });

  const overlayClassNames = useClassNames(() => {
    const base = 'fixed inset-0 bg-black/50';
    const configClasses = unwrapConfigClasses('modal_overlay', config, props);
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
        <ThemeProvider className="fixed inset-0 grid p-size-x place-items-center">
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
            >
              {children}
            </Card>
          </RadixDialog.Content>
        </ThemeProvider>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
});

const DEFAULT_MODAL_CONTENT_TAG = 'div';

const ModalContent = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_MODAL_TAG
>(props: Props<TTag>, ref: React.Ref<TTag>) {
  const { className, ...rest } = props;
  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base = 'pl-size-x pr-size-x pt-size-x pb-size-x';
    const configClasses = unwrapConfigClasses('modal.content', config, props);
    return [base, configClasses, className];
  });

  return render({
    // @ts-ignore
    props: {
      ref,
      className: classNames,
      ...rest,
    },
    defaultTag: DEFAULT_MODAL_CONTENT_TAG,
  });
});

const DEFAULT_MODAL_TITLE_TAG = 'h3';

const ModalTitle = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_MODAL_CONTENT_TAG
>(props: Props<TTag>, ref: React.Ref<TTag>) {
  const { className, ...rest } = props;
  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base = 'text-theme-base text-xl font-medium tracking-tight';
    const configClasses = unwrapConfigClasses('modal.title', config, props);

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
        defaultTag: DEFAULT_MODAL_TITLE_TAG,
      })}
    </RadixDialog.Title>
  );
});

const DEFAULT_MODAL_DESCRIPTION_TAG = 'p';

const ModalDescription = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_MODAL_CONTENT_TAG
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
        defaultTag: DEFAULT_MODAL_DESCRIPTION_TAG,
      })}
    </RadixDialog.Description>
  );
});

export const Modal = Object.assign(ModalRoot, {
  Root: ModalRoot,
  Content: ModalContent,
  Title: ModalTitle,
  Description: ModalDescription,
});
