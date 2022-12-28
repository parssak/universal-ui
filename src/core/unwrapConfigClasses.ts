import { UniversalUIConfigContextProps } from '../config/UniversalUIConfigContext';

export const unwrapConfigClasses = <
  T extends {} = keyof UniversalUIConfigContextProps['components']
>(
  component: keyof UniversalUIConfigContextProps['components'],
  context: UniversalUIConfigContextProps,
  props: T
) => {
  const classes = context.components[component];

  if (typeof classes === 'string') {
    return classes;
  }

  if (typeof classes === 'function') {
    // @ts-ignore
    return classes(props);
  }

  return '';
};
