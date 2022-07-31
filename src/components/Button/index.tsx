import { MouseEventHandler, ReactNode } from 'react';

import { CustomButton } from './style';

interface Props {
  children: ReactNode;
  onClick: MouseEventHandler;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <CustomButton type='button' onClick={onClick}>
      {children}
    </CustomButton>
  );
};

export default Button;
