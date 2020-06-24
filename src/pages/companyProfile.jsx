import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './profile-shop-home'
import Products from './products'
import ProductCreate from './create-product'
import ProductInfo from './product-info'
import StoreProfile from '../components/StoreProfil/StoreProfil.component'

function CompanyProfile() {
 return (
  <div>
  <Router>
  <div className='navbar_bottom'>
  <Link to='/profile' className='navbar_bottom_link'>Mağaza</Link>
  <Link to='/profile/products' className='navbar_bottom_link'>Məhsullar</Link>
  <Link to='/profile/orders' className='navbar_bottom_link'>sİfarİşlər</Link>
  <Link to='/profile/order-history' className='navbar_bottom_link'>sİfarİş keçmİşİ</Link>
  <Link to='/profile/companies' className='navbar_bottom_link'>Kampanİyalar</Link>
  <Link to='/profile/old-companies' className='navbar_bottom_link'>Kampanİya keçmİşİ</Link>
  <Link to='/profile/info' className='navbar_bottom_link'>tənzİmləmələr</Link>
</div>
 
   <Route exact path='/profile' component={Home}/>
   <Route exact  path='/profile/products' component={Products}/>
   <Route exact  path='/profile/product/create' component={ProductCreate}/>
   <Route exact  path='/product/:id/:name' component={ProductInfo}/>
   <Route path='/profile/orders' component={Home}/>
   <Route path='/profile/index' component={Home}/>
   <Route path='/profile/order-history' component={Home}/>
   <Route path='/profile/companies' component={Home}/>
   <Route path='/profile/old-companies' component={Home}/>
   <Route path='/profile/info' component={StoreProfile}/>

   </Router>
  </div>
  
 )
}

export default CompanyProfile