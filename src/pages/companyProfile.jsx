import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './profile-shop-home'
import Products from './products'
import ProductCreate from './create-product'
import ProductInfo from './product-info'
import StoreProfile from '../components/StoreProfil/StoreProfil.component'
import CompanyOrders from './company-orders'

function CompanyProfile() {
 return (
  <div>
  <Router>
  <div className='navbar_bottom'>
  <Link to='/profile' className='navbar_bottom_link'>Mağaza</Link>
  <Link to='/profile/products' className='navbar_bottom_link'>Məhsullar</Link>
  <Link to='/profile/orders' className='navbar_bottom_link'>sİfarİşlər</Link>
  <Link to='/profile/companies' className='navbar_bottom_link'>Kampanİyalar</Link>
  <Link to='/profile/info' className='navbar_bottom_link'>Tənzİmləmələr</Link>
</div>
  
   <Route exact path='/profile' component={Home}/>
   <Route exact  path='/profile/products' component={Products}/>
   <Route exact  path='/profile/product/create' component={ProductCreate}/>
   <Route path='/profile/product/edit/:id' component={ProductCreate}/>
   <Route exact  path='/product/:id/:name' component={ProductInfo}/>
   <Route path='/profile/orders' component={CompanyOrders}/>
   <Route path='/profile/companies' component={Home}/>
   <Route path='/profile/info' component={StoreProfile}/>

   </Router>
  </div>
  
 )
}

export default CompanyProfile
