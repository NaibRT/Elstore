import React, { useEffect, useContext } from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Delivey from "../components/DeliveryProfile/Delivery.component"
import {appContext} from '../contexts/appContext';

function Profile() {
  let AppContext=useContext(appContext);
  useEffect(()=>{
    AppContext.events.mobileSideBarOFF()
  })
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
