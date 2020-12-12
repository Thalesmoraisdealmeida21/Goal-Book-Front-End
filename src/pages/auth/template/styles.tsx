import styled from 'styled-components';

export const ContainerScreen = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

export const Description = styled.div`
  height: 100vh;
  padding: 10vw;
  background: #06bfad;
  display: flex;
  flex-direction: column;

  @media (max-width: 1150px) {
    display: none;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 37px;
    color: white;
  }

  div {
    width: 450px;
    margin: auto;
  }
`;

export const FormContainer = styled.div`
  height: 100vh;
  width: 50vw;
  background: white;
  display: flex;

  @media (max-width: 1150px) {
    width: 100vw;
  }
`;

export const FormContent = styled.div`
  margin: auto;
  width: 450px;
`;
