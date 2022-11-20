import { isSSR } from "./ssr";
import { createPortal } from "react-dom";

export interface PortalProps {
  children: React.ReactNode;
  container?: HTMLElement;
  disabled?: boolean;
}

export function Portal({ children, container, disabled = false }: PortalProps): JSX.Element {
  if (disabled || isSSR()) {
    return children as JSX.Element;
  }

  return createPortal(children, container || document.body);
}
