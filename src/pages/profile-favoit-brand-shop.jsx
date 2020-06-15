import React from 'react'
import IconSlider from '../components/Icon-slider/IconSlider.component'
import Card from '../components/card/card.component'
import Seller from '../components/seller/seller.component'

function FavoritBrandShops() {
 return (
  <div>
   <div className='row'>
    <Card>
     <Card.Header name='Brendler'/>
     <IconSlider/>
    </Card>
   </div>
   <div className='row'>
    <Card>
    <Card.Header name='Magaza ve Saticilar'/>
     <div className='row'>
       <div className='col-lg-6'>
       <Seller name='sdcsdc'/>
       </div>
       <div className='col-lg-6'>
       <Seller name='sdcsdc'/>
       </div>
       <div className='col-lg-6'>
       <Seller name='sdcsdc'/>
       </div>
       <div className='col-lg-6'>
       <Seller name='sdcsdc'/>
       </div>
     </div>
    </Card>
   </div>
  </div>
 )
}

export default FavoritBrandShops
