import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, Route, Link } from 'react-router';

// app components
import App from './App.jsx';
import Order from './components/orderform/Order.jsx';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="order" component={Order}/>
  </Router>
), document.getElementById('app'));
