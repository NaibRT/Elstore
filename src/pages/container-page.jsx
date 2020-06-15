import React,{useContext} from 'react'
import {Switch,Route,Redirect} from "react-router-dom";
import Index from '../pages/index';
import ProductInfo from '../pages/product-info';
import Basket from '../pages/basket';
import Search from '../pages/search';
import CheckoutAddress from '../pages/checkout-adress'
import Profile from './profile';
import LangToggler from '../components/lang_currency_toggler/lang_currency_toggler'
import {appContext} from '../contexts/appContext'


function Main() {
  const AppContext=useContext(appContext);
 return (
  <main>
  <div style={{'display':'none'}}>
        <LangToggler/>
    </div>
  <Switch>
    
  <Route exact={true} path='/' component={Index} />
  <Route exact={true} path='/checkout' component={CheckoutAddress} />
  <Route exact={true} path='/homeandoffice' render={()=>(
    AppContext.events.IsAuthorized()?(<Profile/>):
    (<Redirect to='/'/>)
  )}/>
  <Route exact={true} path='/product' component={ProductInfo} />
  <Route  path='/product/:id/:name' component={ProductInfo} />
  <Route exact={true} path='/basket' component={Basket} />
  <Route exact={true} path='/search' component={Search} />
  </Switch>
  </main>
 )
}

export default Main