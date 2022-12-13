import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSocket } from 'socketio-hooks';
import { ThemeProvider } from '@material-ui/core';

import Home from './views/Home';
import Charts from './views/Charts';
import Bots from './views/Bots';
import About from './views/About';
import Blog from 'views/Blog';
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
            <Route path="/charts" element={<Charts />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/bots" element={<Bots />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Template>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
