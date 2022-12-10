import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSocket } from 'socketio-hooks';
import { ThemeProvider } from '@material-ui/core';

import Home from './views/Home';
import Template from './Components/Template';
import theme from './theme';

const App = () => {
  //Only for debug purposes
  useSocket('FEED', msg => console.log(msg));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Template>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Template>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
