import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

// children - what
// element - where
interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const { children, element = document.body } = props;

    return createPortal(children, element);
};
