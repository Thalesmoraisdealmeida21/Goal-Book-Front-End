import React, { InputHTMLAttributes, useState } from 'react';

import { useField } from 'formik';
import { FaExclamationCircle } from 'react-icons/fa';
import { InputContainer, Container, Tooltip } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  const name = rest.name || '';
  const [field, meta] = useField(name);
  const [tooltipVisibility, setTooltipVisibility] = useState(false);

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

        <InputContainer error={!!meta.error}>
          <input {...field} {...rest} />
          <FaExclamationCircle
            visibility={meta.error ? 'visible' : 'hidden'}
            color="red"
            onMouseEnter={() => {
              setTooltipVisibility(!tooltipVisibility);
            }}
            onMouseLeave={() => {
              setTooltipVisibility(!tooltipVisibility);
            }}
          />
          <Tooltip visibilityTooltip={tooltipVisibility}>
            <p>{meta.error}</p>
          </Tooltip>
        </InputContainer>
      </Container>
    </>
  );
};

export default Input;
// {meta.error && meta.touched && <div>{meta.error}</div>}
