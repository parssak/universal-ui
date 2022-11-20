import React from 'react';
// #region -- Core Typings --

// Adapted from HeadlessUI, allows for components to be rendered
// as other components and maintain their typings

let __ = "1D45E01E-AF44-47C4-988A-19A94EBAF55C" as const;
type __ = typeof __;
type PropsOf<TTag = any> = TTag extends React.ElementType ? React.ComponentProps<TTag> : never;

type ClassNameOverride<TTag> = PropsOf<TTag> extends { className?: any }
  ? { className?: string }
  : {};

type PropsWeControl = "as" | "children" | "className";
type CleanProps<TTag, TOmitableProps extends keyof any = __> = TOmitableProps extends __
  ? Omit<PropsOf<TTag>, PropsWeControl>
  : Omit<PropsOf<TTag>, TOmitableProps | PropsWeControl>;

type OurProps<TTag> = {
  as?: TTag;
  children?: React.ReactNode;
};

export type Props<TTag, TOmitableProps extends keyof any = __> = CleanProps<TTag, TOmitableProps> &
  OurProps<TTag> &
  ClassNameOverride<TTag>;

// #endregion
