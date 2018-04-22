import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  (
    <HashRouter>
      <App />
    </HashRouter>
  ), document.getElementById('app')
);
