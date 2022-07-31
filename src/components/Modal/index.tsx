import { memo, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Background, Container } from './style';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

interface Props {
  children: ReactNode;
}

const Modal = ({ children }: Props) => {
  return createPortal(
    <>
      <Background aria-hidden />
      <Container>{children}</Container>
    </>,
    modalRoot
  );
};

export default memo(Modal);
