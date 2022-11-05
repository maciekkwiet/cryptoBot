import React from 'react';
import ReactDOM from 'react-dom';
import { SocketIOProvider } from 'socketio-hooks';

import './index.css';

import App from './App';
import { UserContextProvider } from 'Contexts/UserContext';

ReactDOM.render(
    <UserContextProvider>
      <SocketIOProvider url="/">
        <App />
      </SocketIOProvider>
    </UserContextProvider>,
  document.getElementById('root')
);
