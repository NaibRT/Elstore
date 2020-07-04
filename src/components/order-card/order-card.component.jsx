import React from 'react'
import Card from '../card/card.component'
import './order-card.component.scss';
import ButtonRating from '../button-rating/buttonRating.component'


function OrderCard(props) {
 return (
  <>
        <div className='card_profile-flex'>
            <div className='card_profile_left'> 
               <img alt='' className='basket_card_profile_img' src={require('../../assets/images/slider/hero.jpg')} />
           </div>

           <div className='card_profile_center'>
               <h1 className='baskert_card_profile_header'>Əl işi müxtəlif toxunmalar </h1>
               <h1 className='baskert_card_profile_price'>18 AZN</h1>
               <div>
                   <ButtonRating class='text_profile_iconcard' icon={require("../../assets/images/icons/Vector 1 (Stroke).svg")} name="məhsul çatdırıldı"/>
               </div>
           </div>
           <div className='card_profile_right price_div '>
              
           </div>
            </div>     
  </>
 )
}

export default OrderCard
