import { createGlobalStyle } from 'styled-components';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
  }

  body {
      background: #fff;
      color: #000;
      -webkit-font-smoothing: antialiased
  }

  body, input, button {
      font-family: 'Roboto', serif;
      font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
      font-weight: 500;
  }

  button {
    cursor: pointer;
  }


`;
