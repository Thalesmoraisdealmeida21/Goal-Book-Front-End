import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { success, error } from '@pnotify/core';
import { useHistory } from 'react-router-dom';
import TemplateAuth from '../template';

import Input from '../../../components/Input';
import Button from '../../../components/button';

import { ContainerLogin } from './styles';

import api from '../../../services/api';

interface User {
  name: string;
  email: string;
  password: string;
}

const CreateAccount: React.FC = () => {
  const history = useHistory();
  const handleCreateUser = useCallback(
    async (data: User) => {
      try {
        await api.post('/users', data);
        success({
          title: 'Mensagem do Sistema',
          text: 'Usuário criado com sucesso',
        });

        history.push('/login');
      } catch (err) {
        const response = err.response.data;
        error({
          title: 'Erro !',
          text: response.message,
        });
      }
    },
    [history],
  );
  return (
    <TemplateAuth>
      <ContainerLogin>
        <h3>Criação de Conta</h3>
      </ContainerLogin>
      <Formik
        initialValues={{
          email: '',
          name: '',
          password: '',
        }}
        validationSchema={yup.object({
          name: yup.string().required('O nome é um campo obrigatório'),
          email: yup
            .string()
            .email('Informe um e-mail válido')
            .required('O E-mail é um campo obrigatório'),
          password: yup.string().required('A senha é um campo obrigatório'),
        })}
        onSubmit={handleCreateUser}
      >
        {() => (
          <Form>
            <Input label="Nome de Usuário" id="name" name="name" />
            <Input label="E-mail" id="email" name="email" />
            <Input
              label="Senha"
              id="password"
              name="password"
              type="password"
            />
            <Button type="submit">Criar Conta</Button>
          </Form>
        )}
      </Formik>

      <div
        style={{
          textAlign: 'center',
        }}
      >
        <Link style={{ textDecoration: 'none' }} to="/login">
          Voltar par ao Login
        </Link>
      </div>
    </TemplateAuth>
  );
};

export default CreateAccount;
