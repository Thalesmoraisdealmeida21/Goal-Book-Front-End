import React, { createContext, useState, useCallback, useContext } from 'react';
import { error, notice } from '@pnotify/core';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
}

interface Credentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface AuthContextState {
  user: User;
  signIn(credentials: Credentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);
const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoalBook:token');
    const user = localStorage.getItem('@GoalBook:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async (dataCredentials: Credentials) => {
    try {
      const response = await api.post<AuthState>(
        '/users/auth',
        dataCredentials,
      );

      setData(response.data);

      localStorage.setItem('@GoalBook:token', response.data.token);
      localStorage.setItem(
        '@GoalBook:user',
        JSON.stringify(response.data.user),
      );
      notice({
        title: 'Sistema',
        text: 'Usuário autenticado com sucesso',
      });
      history.push('/dashboard');
    } catch (err) {
      const response = err.response.data;
      error({
        title: 'Erro !',
        text: response.message,
      });
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoalBook:token');
    localStorage.removeItem('@GoalBook:user');
    history.push('/login');
    setData({} as AuthState);
  }, [history]);

  return (
    <>
      <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

function useAuth(): AuthContextState {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
