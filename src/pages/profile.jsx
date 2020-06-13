import React from 'react'
import name from '../components/card/card.component'
import Card from '../components/card/card.component'
import ListItem from '../components/List-Item/Listitem.component'
import OrderCard from '../components/order-card/order-card.component'

function Profile() {
 return (
  <div className='container-fluid'>
     <div className='row'>
        <div className='col-lg-4'>
         <Card>
           <ListItem name='salma qaqa'/>
           <ListItem name='salma qaqa'/>
           <ListItem name='salma qaqa'/>
           <ListItem name='salma qaqa'/>
           <ListItem name='salma qaqa'/>
         </Card>
        </div>
        <div className='col-lg-8'>
          <OrderCard/>
        </div>
     </div>
  </div>
 )
}

export default Profile
