import React from 'react';

import { useHistory } from 'react-router-dom';
import Header from '../../components/header/header';

import bg from '../../assets/HomeImage.png';

import './styles.css';

const Home: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <Header />

      <div className="content">
        <div className="welcomeTexts">
          <h1>Leia o maior Numero de Livros Possivel</h1>
          <p>
            Goal Book é um plataforma para você criar metas de leitura, para que
            você finalmente consiga ler todos os livros que falou que leria.
            Acesse e veja como funciona
          </p>
          <button
            type="button"
            onClick={() => {
              history.push('/createaccount');
            }}
          >
            {' '}
            Criar Conta
          </button>
        </div>

        <div className="backgroundImg">
          <img src={bg} alt="bg" />
        </div>
      </div>
    </>
  );
};

export default Home;
