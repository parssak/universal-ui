// ! For internal use only, do not export from index.ts

import { createContext, useContext } from 'react';
import { GroupBorderOption, Variant } from '../../types';

export const InputGroupContext = createContext<{
  variant?: Variant;
  borderOption?: GroupBorderOption;
} | null>(null);

export const useInputGroupContext = () => {
  return useContext(InputGroupContext);
};
