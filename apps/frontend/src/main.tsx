import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <StrictMode> 
  <BrowserRouter>
    <Provider store={Store}>
      <App/>
    </Provider>
  </BrowserRouter>
  // </StrictMode>
);
