import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// app components
import App from './App';
import todoApp from './reducers';

let store = createStore(todoApp)

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));
