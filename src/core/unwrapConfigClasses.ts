import { UniversalUIConfigContextProps } from '../config/UniversalUIConfigContext';

export const unwrapConfigClasses = (
  component: keyof UniversalUIConfigContextProps['components'],
  context: UniversalUIConfigContextProps,
  props: Record<string, any>
) => {
  const classes = context.components[component];

  if (typeof classes === 'string') {
    return classes;
  }

  if (typeof classes === 'function') {
    return classes(props);
  }

  return ''
};
