import React,{useContext} from 'react'
import {Switch,Route,Redirect} from "react-router-dom";
import Index from '../pages/index';
import ProductInfo from '../pages/product-info';
import Basket from '../pages/basket';
import Search from '../pages/search';
import CheckoutAddress from '../pages/checkout-adress'
import Profile from './profile';
import LangToggler from '../components/lang_currency_toggler/lang_currency_toggler'
import StoreRegistr from "../components/StoreRegistr/StoreRegistr.component"
import Delivery from "../components/DeliveryRegistr/DeliveryRegistr.component"
import {appContext} from '../contexts/appContext'
import Verify from './verify'

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
  <Route exact={true} path='/homeandoffice'/>
  <Route exact={true} path='/product' component={ProductInfo} />
  <Route  path='/product/:id/:name' component={ProductInfo} />
  <Route exact={true} path='/basket' component={Basket} />
  <Route exact={true} path='/search' component={Search} />
  <Route exact={true} path='/open-store' component={StoreRegistr} />
  <Route exact={true} path='/worked-delivery' component={Delivery} />
  <Route  path='/verify/:token' component={Verify} />
  <Route exact path='/profile' render={()=>(
    AppContext.app.isAuthorized?(<Profile/>):
    (<Redirect to='/'/>)
  )}/>
  </Switch>
  </main>
 )
}

export default Main