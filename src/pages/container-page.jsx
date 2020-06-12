import React from 'react'
import {Switch,Route} from "react-router-dom";
import Index from '../pages/index';
import ProductInfo from '../pages/product-info';
import Basket from '../pages/basket';
import Search from '../pages/search';
import CheckoutAddress from '../pages/checkout-adress'

function Main() {

 return (
  <main>
  <Switch>
  <Route exact={true} path='/' component={CheckoutAddress} />
  <Route exact={true} path='/product' component={ProductInfo} />
  <Route  path='/product/:id/:name' component={ProductInfo} />
  <Route exact={true} path='/basket' component={Basket} />
  <Route exact={true} path='/search' component={Search} />
  </Switch>
  </main>
 )
}

export default Main
