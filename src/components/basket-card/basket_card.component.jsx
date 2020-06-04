import React,{useEffect,useState} from 'react';
import './basket_card.component.scss';
import '../../assets/sass/abstracts/_text.scss';

function BasketCard(props){

   




    return (
        <div className='basket__card'>
            <div className='row'>
            <div className='col-lg-3 col-sm-4  '>
               <img className='basket_card_img' src='https://static.dezeen.com/uploads/2020/03/ikea-pizza-hut-sava-table-design-hong-kong_dezeen_2364_sq-a-852x852.jpg' />
           </div>
           <div className='col-lg-5 col-sm-8'>
               <div className='basket_name_for_responsivity'>
               <h1 className='baskert_card_header'>Əl işi müxtəlif toxunmalar</h1>
               <div><span className='basket_card_firm '>Öz Home</span><span className='basket_card_firm_height text--secondary'></span>  <span className='basket_card_selling'>212 dəfə satıldı</span> </div>
               </div>
               <div className='basket_card_checkboxdiv'>
                   <form><input type='checkbox' /><span className='basket__form__text'>Hədiyyə paketi olaraq hazırlansın (+2 AZN)</span> </form>
               </div>
               <div className='basket_order_details'>
                <h6 className='basket_order_details_head accordion'>Sifarİş qeydləri <span><img src={require('../../assets/images/icons/arrowDown.png')} /></span></h6>
                <p className='basket_order_details_text panel'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis.
                <div><a href='#'>Düzəliş et</a></div>
                </p>
               
               </div>
               <div className='basket_card_shipping_section'>
                   <h5 className='basket_card_shipping_section_head'>çatdırlıma</h5>
                   <p className='basket_card_shipping_section_text' >Pulsuz (Bakı daxili)</p>
               </div>
           </div>
           <div className='col-lg-4 col-sm-12 price_div '>
               <div className='basket_price'>
                   <div>
                        <h2 className='basket_price_head'>18 AZN</h2>
                        <div><span className='discount'>25% endirim</span><span className='oldPrice'>24 AZN</span></div>
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