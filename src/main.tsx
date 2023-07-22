import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

// state
import { Provider } from 'react-redux';
import store from './store/store.ts';

// style
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
