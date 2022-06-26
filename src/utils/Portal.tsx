import { isSSR } from './ssr';
import { createPortal } from 'react-dom';

// const PORTAL_ROOT_ID = 'figui-portal-root';

export interface PortalProps {
  children: React.ReactNode;
  container?: HTMLElement;
  disabled?: boolean;
}

export function Portal({
  children,
  container,
  disabled = false,
}: PortalProps): JSX.Element {
  if (disabled || isSSR()) {
    return children as JSX.Element;
  }

  // const portalRoot = document.getElementById(PORTAL_ROOT_ID);

  // if (!portalRoot) {
  //   const portalRoot = document.createElement('div');
  //   portalRoot.id = PORTAL_ROOT_ID;
  //   document.body.appendChild(portalRoot);
  // }

  return createPortal(children, container || document.body);
}
