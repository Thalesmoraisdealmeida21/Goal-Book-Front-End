import React from 'react';
import TemplateAuth from '../template';

import Input from '../../../components/Input';
import Button from '../../../components/button';

import { ContainerLogin } from './styles';

const Login: React.FC = () => {
  return (
    <TemplateAuth>
      <ContainerLogin>
        <h3>Login no Sistema</h3>
      </ContainerLogin>

      <form>
        <Input label="E-mail" />
        <Input label="Senha" />

        <Button>Login</Button>
      </form>
    </TemplateAuth>
  );
};

export default Login;
