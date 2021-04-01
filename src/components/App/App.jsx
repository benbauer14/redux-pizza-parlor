import React from 'react';
import axios from 'axios';
import {HashRouter, Route, Link} from 'react-router-dom';
import './App.css';

import Home from '../Home/Home'
import SelectPizza from '../SelectPizza/SelectPizza'
import CustomerInfo from '../CustomerInfo/CustomerInfo'
import Checkout from '../Checkout/Checkout'

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

    <HashRouter>

      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/SelectPizza' exact>
        <SelectPizza />
      </Route>
      <Route path='/CustomerInfo' exact>
        <CustomerInfo />
      </Route>
      <Route path='/Checkout' exact>
        <Checkout />
      </Route>

    </HashRouter>
    </div>
  );
}

export default App;
