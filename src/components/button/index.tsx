import React, { ButtonHTMLAttributes } from 'react';

import { ButtonContent } from './styles';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return (
    <>
      <ButtonContent {...rest}>{children}</ButtonContent>
    </>
  );
};

export default Button;
