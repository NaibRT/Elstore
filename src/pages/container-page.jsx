import React,{useContext, useEffect, useState} from 'react'
import {Switch,Route,Redirect} from "react-router-dom";
import Index from '../pages/index';
import ProfileShopHome from '../pages/profile-shop-home';
import CompanyProfile from './companyProfile'
import ProductInfo from '../pages/product-info';
import Basket from '../pages/basket';
import Search from '../pages/search';
import CheckoutAddress from '../pages/checkout-adress'
import UserProfile from './profile';
import LangToggler from '../components/lang_currency_toggler/lang_currency_toggler'
import StoreRegistr from "../components/StoreRegistr/StoreRegistr.component"
import Delivery from "../components/DeliveryRegistr/DeliveryRegistr.component"
import {appContext} from '../contexts/appContext'
import CreateProduct from './create-product'
import Verify from './verify'
import CompanyAdd from "../components/CompanyAdd/CompanyAdd.component"
import Delivey from "./DeliveryProfile"
import CompanyHome from './profile-shop-home'
import Faq from './faq.component';

function Main() {
  const AppContext=useContext(appContext);
  const [user, setuser] = useState({})


  useEffect(()=>{
    let user=AppContext.events.getUserCredentials();
    setuser(user)
  },[])

 return (
  <main>
  <div style={{'display':'none'}}>
        <LangToggler/>
    </div>
  <Switch>
    
  <Route exact={true} path='/' component={Faq} />
  <Route exact={true} path='/checkout' component={CheckoutAddress} />
  <Route exact={true} path='/homeandoffice'/>
  <Route exact={true} path='/product' component={ProductInfo} />

  <Route  path='/product/:id/:name' component={ProductInfo} />
  <Route exact={true} path='/basket' component={Basket} />
  <Route  path='/basket/:id' component={Basket} />
  <Route exact={true} path='/search' component={Search} />
  <Route  path='/search/:query' component={Search} />
  <Route exact={true} path='/open-store' component={StoreRegistr} />
  <Route exact={true} path='/worked-delivery' component={Delivery} />
  <Route  path='/verify/:token' component={Verify} />
  <Route  path='/company/:id/:name' component={CompanyHome} />

  <Route  path='/CompanyAdd' component={CompanyAdd} />
  <Route exact={true} path='/product/create' component={CreateProduct} />

  <Route path='/profile' render={()=>(
    (AppContext.app.isAuthorized&&AppContext.app.user.type===1)?(<UserProfile/>):
    (AppContext.app.isAuthorized&&AppContext.app.user.type===2)?(<CompanyProfile/>):
    (AppContext.app.isAuthorized&&AppContext.app.user.type===3)?(<CompanyProfile/>):
    (AppContext.app.isAuthorized&&AppContext.app.user.type===4)?(<Delivey/>):
    (<Redirect to='/'/>)
)}/>

  </Switch>
  </main>
 )
}

export default React.memo(Main)