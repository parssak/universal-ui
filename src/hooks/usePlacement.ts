import { Placement } from "@popperjs/core";
import { usePopper } from "react-popper";

export const usePlacement = ({
  reference,
  popper,
  placement
}: {
  reference: Element | null;
  popper: HTMLElement | null;
  placement?: Placement;
}) => {
  return usePopper(reference, popper, {
    placement,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 4]
        }
      }
    ]
  });
};
