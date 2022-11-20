import React from "react";
import { Props } from "./types";

export function forwardRefWithAs<T extends { name: string; displayName?: string }>(
  component: T
): T & { displayName: string } {
  return Object.assign(React.forwardRef(component as unknown as any) as any, {
    displayName: component.displayName ?? component.name
  });
}

export function render<TTag extends React.ElementType>({
  props,
  defaultTag
}: {
  props: Props<TTag>;
  defaultTag: React.ElementType;
}) {
  const { as: Component = defaultTag, ...rest } = props;
  return React.createElement(Component, rest);
}
