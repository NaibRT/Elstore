import React from 'react'
import name from '../components/card/card.component'
import Card from '../components/card/card.component'
import ListItem from '../components/List-Item/Listitem.component'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import SearchResult from '../components/search-result-component/SearchResultComp.component'

import OrderCard from '../components/order-card/order-card.component'


function Profile() {
 return (
  <div className='container-fluid'>
  <Router>
  <div className='row'>
  <div className='col-lg-4'>
   <Card>
    <Link to='/profie/orders' exact><ListItem name='Sifarislerim'/></Link>
    <Link to='/profie/orderCard' exact><ListItem name='Tamamlanmis Sifarisler'/></Link>
   </Card>
  </div>
  <div className='col-lg-8'>
    <Route path='/profie/orders' component={OrderCard}/>
    <Route path='/profie/orderCard' component={SearchResult}/>
  </div>
</div>
  </Router>
  </div>
 )
}

export default Profile
