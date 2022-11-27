import { createContext, useContext } from 'react';
import { GroupBorderOption, Variant } from '../../types';

export const ButtonGroupContext = createContext<{
  variant?: Variant;
  borderOption?: GroupBorderOption;
} | null>(null);

export const useButtonGroupContext = () => {
  return useContext(ButtonGroupContext);
};
