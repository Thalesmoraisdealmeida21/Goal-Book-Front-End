import React from 'react';

import { ButtonContent } from './styles';

const Button: React.FC = ({ children, ...rest }) => {
  return (
    <>
      <ButtonContent {...rest}>{children}</ButtonContent>
    </>
  );
};

export default Button;
