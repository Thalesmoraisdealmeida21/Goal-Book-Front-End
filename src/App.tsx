import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { defaults } from '@pnotify/core';
import GlobalStyle from './styles/global';
import Routes from './routes';

import { AuthProvider } from './hooks/authHook';

const App: React.FC = () => {
  defaults.stack.maxOpen = 1;
  defaults.delay = 2000;

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>

      <GlobalStyle />
    </>
  );
};

export default App;
