import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import '../assets/stylesheets/index.scss';

ReactDOM.render(
  <Provider store={store}>
  <div>Hello cats!</div>
  </Provider>,
  document.getElementById('app')
);
