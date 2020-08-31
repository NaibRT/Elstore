import React, { useEffect, useContext, useState } from 'react'
import Card from '../components/card/card.component'
import ListItem from '../components/List-Item/Listitem.component'
import {BrowserRouter as Router,Link,Route, NavLink} from 'react-router-dom'
import Orders from './buyer-orders'
import FavoritBrandShops from '../pages/profile-favoit-brand-shop'
import ProfileInfo from '../components/ProfilInfo/Porfilinfo.component'
import {appContext} from '../contexts/appContext'
import LikedProducts from './user-liked-product'
import ProductInfo from './product-info'
import ProfileShopeHome from './profile-shop-home'

import '../assets/sass/pages/profile.scss'


function Profile(){
  const [likedProduct,setLikedProduct]=useState([])
  let AppContext=useContext(appContext);
  useEffect(()=>{
    AppContext.events.mobileSideBarOFF()
  })

 return (
  <div className='container-fluid'>
  <Router>
  <div className='row'>
  <div className='col-lg-3'>
   <Card className='card-border'>
    <NavLink to='/profie/profile-info' exact><ListItem name='Info'/></NavLink>
    <NavLink to='/profile' exact><ListItem name='Sifarislerim'/></NavLink>
    <NavLink to='/profie/liked-product' exact><ListItem name='Bəyənilən məhsullar'/></NavLink>
    <NavLink to='/profie/favorit-shop' exact><ListItem name='Beyenilen Magazalar'/></NavLink>
   </Card>
  </div>
  <div className='col-lg-9'>
  <br/>
    <Route exact path='/profile' component={Orders}/>
    <Route exact  path='/profie/liked-product' component={LikedProducts}/>
    <Route exact  path='/profie/favorit-shop' component={FavoritBrandShops}/>
    <Route path='/profie/profile-info' component={ProfileInfo}/>
    <Route path='/company/:id/:name' component={ProfileShopeHome}/>
    <Route path='/product/:id/:name' component={ProductInfo}/>
  </div>
</div>

  </Router>
  </div>
 )
}

export default Profile
