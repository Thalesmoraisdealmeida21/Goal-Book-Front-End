import React, { InputHTMLAttributes } from 'react';

import { InputContainer, Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <>
      <Container>
        <span
          style={{
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
          }}
        >
          {label}
        </span>

        <InputContainer>
          <input {...rest} />
        </InputContainer>
      </Container>
    </>
  );
};

export default Input;
