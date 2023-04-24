import React from 'react';
import { useUniversalUIConfig } from '../../config/UniversalUIConfigContext';
import { useClassNames } from '../../hooks/useClassNames';
import * as RadixTabs from '@radix-ui/react-tabs';

import {
  forwardRefWithAs,
  Props,
  render,
  unwrapConfigClasses,
} from '../../core';

export interface TabsProps extends RadixTabs.TabsProps {}
const TabsRoot = ({ ...rest }: TabsProps) => {
  return <RadixTabs.Root {...rest} />;
};

const DEFAULT_TABS_LIST_TAG = 'div';

export interface TabsListProps extends RadixTabs.TabsListProps {}

const TabsList = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_TABS_LIST_TAG
>(props: Props<TTag> & TabsProps, ref: React.Ref<TTag>) {
  const { className, ...rest } = props;
  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base = 'flex border-b border-theme-base';
    const configClasses = unwrapConfigClasses('tabs.list', config, props);
    return [base, configClasses, className];
  });

  return (
    <RadixTabs.List asChild>
      {render({
        // @ts-ignore
        props: {
          ref,
          className: classNames,
          ...rest,
        },
        defaultTag: DEFAULT_TABS_LIST_TAG,
      })}
    </RadixTabs.List>
  );
});

const DEFAULT_TABS_TRIGGER_TAG = 'button';

export interface TabsTriggerProps extends RadixTabs.TabsTriggerProps {}

const TabsTrigger = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_TABS_TRIGGER_TAG
>(props: Props<TTag> & TabsTriggerProps, ref: React.Ref<TTag>) {
  const { className, value, ...rest } = props;
  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base =
      'inline-block px-size-x py-size-x text-size leading-size font-medium text-theme-muted group/tabs-trigger border-b-2 border-transparent';
    const activeClasses =
      'data-[state=active]:border-current data-[state=active]:text-theme-active';
    const inactiveClasses = 'data-[state=inactive]:hover:text-theme-active';
    const configClasses = unwrapConfigClasses('tabs.trigger', config, props);
    return [base, activeClasses, inactiveClasses, configClasses, className];
  });

  return (
    <RadixTabs.Trigger value={value} asChild>
      {render({
        // @ts-ignore
        props: {
          ref,
          className: classNames,
          ...rest,
        },
        defaultTag: DEFAULT_TABS_TRIGGER_TAG,
      })}
    </RadixTabs.Trigger>
  );
});

const DEFAULT_TABS_CONTENT_TAG = 'div';

export interface TabsContentProps extends RadixTabs.TabsContentProps {}

const TabsContent = forwardRefWithAs(function<
  TTag extends React.ElementType = typeof DEFAULT_TABS_CONTENT_TAG
>(props: Props<TTag> & TabsContentProps, ref: React.Ref<TTag>) {
  const { className, value, ...rest } = props;
  const config = useUniversalUIConfig();

  const classNames = useClassNames(() => {
    const base = 'inline-block';
    const configClasses = unwrapConfigClasses('tabs.content', config, props);
    return [base, configClasses, className];
  });

  return (
    <RadixTabs.Content value={value} asChild>
      {render({
        // @ts-ignore
        props: {
          ref,
          className: classNames,
          ...rest,
        },
        defaultTag: DEFAULT_TABS_CONTENT_TAG,
      })}
    </RadixTabs.Content>
  );
});

export const Tabs = Object.assign(TabsRoot, {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});
