import React from 'react';

import logo from '../../../assets/LogoText.png';

import {
  ContainerScreen,
  Description,
  FormContainer,
  FormContent,
} from './styles';

const TemplateAuth: React.FC = ({ children }) => {
  return (
    <ContainerScreen>
      <Description>
        <div>
          <img src={logo} alt="logo" />
          <p>Cria sua conta e desfrute das nossas funcionalidades</p>
        </div>
      </Description>

      <FormContainer>
        <FormContent>{children}</FormContent>
      </FormContainer>
    </ContainerScreen>
  );
};

export default TemplateAuth;
