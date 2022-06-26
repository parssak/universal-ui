import { Placement } from '@popperjs/core';
import { useState, useEffect } from 'react';
import { usePopper } from 'react-popper';
export const usePlacement = ({
  reference,
  popper,
  placement,
  deps = [],
}: {
  reference: Element | null;
  popper: HTMLElement | null;
  placement?: Placement;
  deps?: any[];
}) => {
  const [syncValue, setSyncValue] = useState(false);

  useEffect(() => {
    setSyncValue(!syncValue);
  }, [...deps, placement]);

  return usePopper(reference, popper, {
    placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 4],
        },
      },
    ],
  });
};
