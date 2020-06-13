import React from 'react'
import {Switch,Route} from "react-router-dom";
import Index from '../pages/index';
import ProductInfo from '../pages/product-info';
import Basket from '../pages/basket';
import Search from '../pages/search';
<<<<<<< HEAD
import CheckoutAddress from '../pages/checkout-adress';
=======
import CheckoutAddress from '../pages/checkout-adress'
import Profile from './profile';
>>>>>>> 29b963727229f96aa2c0db83f0be79d20bb59274

function Main() {

 return (
  <main>
  <Switch>
  <Route exact={true} path='/' component={Profile} />
  <Route exact={true} path='/product' component={ProductInfo} />
  <Route  path='/product/:id/:name' component={ProductInfo} />
  <Route exact={true} path='/basket' component={Basket} />
  <Route exact={true} path='/search' component={Search} />
  <Route exact={true} path='/checkout' component={CheckoutAddress} />
  </Switch>
  </main>
 )
}

export default Main
