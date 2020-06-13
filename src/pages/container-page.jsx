import React from 'react'
import {Switch,Route} from "react-router-dom";
import Index from '../pages/index';
import ProductInfo from '../pages/product-info';
import Basket from '../pages/basket';
import Search from '../pages/search';
import CheckoutAddress from '../pages/checkout-adress'
import Profile from './profile';
import LangToggler from '../components/lang_currency_toggler/lang_currency_toggler'
function Main() {

 return (
  <main>
  <div style={{'display':'none'}}>
        <LangToggler/>
    </div>
  <Switch>
    
  <Route exact={true} path='/' component={Index} />
  <Route exact={true} path='/checkout' component={CheckoutAddress} />
  <Route exact={true} path='/profile' component={Profile} />
  <Route exact={true} path='/product' component={ProductInfo} />
  <Route  path='/product/:id/:name' component={ProductInfo} />
  <Route exact={true} path='/basket' component={Basket} />
  <Route exact={true} path='/search' component={Search} />
  </Switch>
  </main>
 )
}

export default Main