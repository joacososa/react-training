import React from 'react';
import { Switch, Route } from "react-router-dom";
import ProductList from './components/productList/ProductList';
import BaseNavbar from './components/common/nav/BaseNavbar';
import About from './components/about/About';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <BaseNavbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/about" component={About} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
