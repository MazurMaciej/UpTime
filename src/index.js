import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store'
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './scss/index.scss';

import { HomePage } from './pages/HomePage';
import { UserPage } from './pages/UserPage';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/uptime" component={HomePage} />
        <Route exact path="/uptime/:id" component={UserPage} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

