import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createStore,
  applyMiddleware
} from "redux";
import reducer from "./reducers/reducers";
import {
  Provider
} from "react-redux";
const store = createStore(reducer);
ReactDOM.render( < Provider store={store} >
  <App />
  </Provider>,
  document.getElementById('root')
);

