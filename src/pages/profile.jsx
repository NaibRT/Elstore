import React from 'react'
import name from '../components/card/card.component'
import Card from '../components/card/card.component'
import ListItem from '../components/List-Item/Listitem.component'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import SearchResult from '../components/search-result-component/SearchResultComp.component'

import OrderCard from '../components/order-card/order-card.component'
import FavoritBrandShops from '../pages/profile-favoit-brand-shop'


function Profile() {
 return (
  <div className='container-fluid'>
  <Router>
  <div className='row'>
  <div className='col-lg-3'>
   <Card>
    <Link to='/profie/orders' exact><ListItem name='Sifarislerim'/></Link>
    <Link to='/profie/orderCard' exact><ListItem name='Tamamlanmis Sifarisler'/></Link>
    <Link to='/profie/favorit-shop' exact><ListItem name='Beyenilen Magazalar'/></Link>
    <Link to='/profie/orderCard' exact><ListItem name='Tamamlanmis Sifarisler'/></Link>
   </Card>
  </div>
  <div className='col-lg-9'>
    <Route path='/profie/orders' component={OrderCard}/>
    <Route path='/profie/orderCard' component={SearchResult}/>
    <Route path='/profie/favorit-shop' component={FavoritBrandShops}/>
  </div>
</div>
  </Router>
  </div>
 )
}

export default Profile
