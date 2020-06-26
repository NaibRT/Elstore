import React from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Delivey from "../components/DeliveryProfile/Delivery.component"

function Profile() {
 return (
  <div className='container-fluid'>
  <Router>
  <div className='row'>
  <div className='col-lg-12 col-cd-12 col-xs-12'>
   <Delivey/>
</div>
</div>

  </Router>
  </div>
 )
}

export default Profile
