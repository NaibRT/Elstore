import React from 'react'
import Badge from '../components/step-badge/badge.component'
import Card from '../components/card/card.component'

function CheckoutAddress() {
 return (
  <div>
   
   <Card>
    <Card.Header name='Elaqe Melumatlari' />
    <Badge className='badge-active' icon={require('../assets/images/icons/Box.svg')} name='Catdirilma'/>
   </Card>
  </div>
 )
}

export default CheckoutAddress
