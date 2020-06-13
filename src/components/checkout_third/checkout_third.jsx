import React from 'react'
import './checkout_third.scss';
import Badge from '../step-badge/badge.component'
import Card from '../card/card.component'
import InputGroup from "../InputGroup/InputGroup.component";
function CheckoutThird() {

    return (
       
        
        <>
             <div className='checkout_header'>
            <Badge class='badge badge-done' icon={require('../../assets/images/icons/box white.svg')} name='Catdirilma'/>
            <div className='badge_href' />
            <Badge class='badge badge-done' icon={require('../../assets/images/icons/Payment white.svg')} name='Ödəniş'/>
            <div className='badge_href' />
            <Badge class='badge badge-active' icon={require('../../assets/images/icons/Verify.svg')} name='Sifariş et'/>
            </div>

            <br/>

            <Card>
            <Card.Header name='Çatdırılma ünvanı' />
                <div className='row'>
                    <div className='col-sm-12 col-lg-6'>
                        <p>Ad Soyad</p>
                        <p>+994 70 727-72-72</p>
                        <p>test@gmail.com</p>
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <p>Bakı şəhəri</p>
                        <p>Qulu Quliyev küçəsi ev 3</p>
                        <p>Əmircan qəsəbəsi</p>
                        <p>test@gmail.com</p>
                    </div>
                </div>
                <p className='checkout_bottomcardtext'>
                    <h5>Əlavə məlumat </h5>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis.
                </p>
            </Card>
            <br/>
            <Card>
               
                <br/>
                <div>
                <Card.Header name='Ödəmə üsulu' />
                   <div className='creditCard'>
                    <p>Onlayn ödəmə</p>
                    <p>4169 ···· ···· ··45 nömrəli kart vasitəsi ilə</p>
                   </div> 
                </div>
            </Card>
            <br/>
            <button className='form_button_multiple' >SİFARİŞ ET</button>
       </>
    )
}

export default CheckoutThird
