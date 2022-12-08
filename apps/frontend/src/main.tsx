import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import App from './app/app';
import reducer from './app/store/reducer';
import { DispatchType, UsersAction, UsersState } from './app/type';

const store: Store<UsersState, UsersAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <App  />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
