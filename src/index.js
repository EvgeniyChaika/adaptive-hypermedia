import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import appStore from './store/appStore';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

render(
  (
    <Provider store={appStore}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  ), document.getElementById('app')
);
