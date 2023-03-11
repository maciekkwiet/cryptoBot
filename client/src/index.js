import React from 'react';
import ReactDOM from 'react-dom';
import { SocketIOProvider } from 'socketio-hooks';
import { Provider } from 'react-redux'
import store from './store'

import './index.css';

import App from './App';
import { UserContextProvider } from 'Contexts/UserContext';

ReactDOM.render(
    <Provider store={store}>
      <UserContextProvider>
        <SocketIOProvider url="/">
          <App />
        </SocketIOProvider>
      </UserContextProvider>
    </Provider>,
  document.getElementById('root')
);
