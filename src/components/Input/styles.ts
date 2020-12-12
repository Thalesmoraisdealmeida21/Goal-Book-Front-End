import styled from 'styled-components';

interface InputProps {
  error?: boolean;
}

interface TooltipProps {
  visibilityTooltip?: boolean;
}

export const InputContainer = styled.div<InputProps>`
  display: flex;
  padding: 10px;
  border: 1px solid ${props => (props.error ? 'red' : '#07bfad')};
  border-radius: 8px;
  width: 100%;
  transition: ease-in-out 1s;

  svg {
    cursor: pointer;
  }

  input {
    border: transparent;
    width: 100%;
  }
`;

export const Container = styled.div`
  margin: 15px;
`;

export const Tooltip = styled.div<TooltipProps>`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted red;
  visibility: ${props => (props.visibilityTooltip ? 'visible' : 'hidden')};

  p {
    width: 320px;
    background-color: ${props =>
      props.visibilityTooltip ? '#ff2121b0' : 'white'};
    transition: background-color 0.7s ease-out;
    color: #fff;
    text-align: center;
    font-size: 16px;
    padding: 10px 0;
    border-radius: 6px;
    position: absolute;
    bottom: 20px;
    left: -240px;
  }
`;
