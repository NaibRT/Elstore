import React,{useEffect,useState} from 'react';
import './basket_card.component.scss';
import '../../assets/sass/abstracts/_text.scss';

function BasketCard(props){

   




    return (
        <div className='basket__card'>
            <div className='card-flex'>
            <div className='card_left'> 
               <img className='basket_card_img' src={require('../../assets/images/slider/hero.jpg')} />
           </div>
           <div className='card_center'>
               <div className='basket_name_for_responsivity'>
               <h1 className='baskert_card_header'>Əl işi müxtəlif toxunmalar </h1>
               <div><span className='basket_card_firm '>Öz Home</span><span className='basket_card_firm_height text--secondary'></span>  <span className='basket_card_selling'>212 dəfə satıldı</span> </div>
               </div>
              <div className="infor_respon">
                <div className='basket_card_checkboxdiv'>
                    <form><input  type='checkbox' /><span className='basket__form__text'>Hədiyyə paketi olaraq hazırlansın (+2 AZN)</span> </form>
                </div>
                <div className='basket_order_details'>
                    <h6 className='basket_order_details_head accordion'>Sifarİş qeydləri <span><img src={require('../../assets/images/icons/arrowDown.png')} /></span></h6>
                    <p className='basket_order_details_text panel'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis.
                    <div><a href='#'>Düzəliş et</a></div>
                    </p>
                </div>
                <div className='basket_card_shipping_section'>
                    <h5 className='basket_card_shipping_section_head'>çatdırılma</h5>
                    <p className='basket_card_shipping_section_text' >Pulsuz (Bakı daxili)</p>
                </div>
              </div>


           </div>
           <div className='card_right price_div '>
               <div className='basket_price'>
                   <div>
                        <h2 className='basket_price_head'>{props.price} AZN</h2>
                    </div>
                    <div className='add_minus'>
                        <button data-id={props.id} onClick={(e)=>{props.minus(e)}}  className='add_minus_button'>-</button>
                        <span className='add_minus_text'>{props.count}</span>
                        <button data-id={props.id} onClick={(e)=>{props.plus(e)}} className='add_plus_button'>+</button>
                    </div>
               </div>
           </div>
            </div>
            <div className='basket_bottom_buttons'>
                <button className='basket_bottom_button'><img className='basket_bottom_button_img' src={require('../../assets/images/icons/heart.png')} />əlavə et</button>
                <button className='basket_bottom_button'>sonra al</button>
                <button className='basket_bottom_button'>SİL</button>
            </div>
        </div>
    )
}

export default BasketCard;