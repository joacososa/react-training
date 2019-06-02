import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from './store/configureStore';
import App from "./App";

const store = configureStore();

const Root = () => (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

export default Root;