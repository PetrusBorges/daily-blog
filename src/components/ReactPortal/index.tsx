import { createPortal } from 'react-dom';

interface ReactPortalProps {
  children: React.ReactNode;
  containerId: string;
}

export function ReactPortal({ children, containerId }: ReactPortalProps) {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    container?.setAttribute('id', containerId);
    document.body.appendChild(container);
  }

  return createPortal(children, container);
}
