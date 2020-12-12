import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TemplateAuth from '../template';

import Input from '../../../components/Input';
import Button from '../../../components/button';

import { ContainerLogin } from './styles';

import { useAuth } from '../../../hooks/authHook';

interface User {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { signIn } = useAuth();
  return (
    <TemplateAuth>
      <ContainerLogin>
        <h3>Login no Sistema</h3>
      </ContainerLogin>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Informe um e-mail válido')
            .required('Informe o e-mail'),
          password: Yup.string().required('Informe a senha'),
        })}
        onSubmit={data => {
          signIn(data);
        }}
      >
        {() => (
          <Form>
            <Input name="email" id="email" label="E-mail" />
            <Input
              name="password"
              id="password"
              label="Senha"
              type="password"
            />

            <Button>Login</Button>
          </Form>
        )}
      </Formik>

      <div
        style={{
          textAlign: 'center',
        }}
      >
        <Link style={{ textDecoration: 'none' }} to="/createaccount">
          {' '}
          Criar Conta
        </Link>
      </div>
    </TemplateAuth>
  );
};

export default Login;
