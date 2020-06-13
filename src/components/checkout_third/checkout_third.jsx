import React from 'react'
import './checkout_third.scss';
import Badge from '../step-badge/badge.component'
import Card from '../card/card.component'
import InputGroup from "../InputGroup/InputGroup.component";
import {Link} from 'react-router-dom';
function CheckoutThird() {

    return (
       
        
        <>
        <Link className='goBasket' to='/basket' ><img src={require('../../assets/images/icons/next-icon.svg')} /> səbətə gerİ dön</Link>
            <br/>
            <h2 className='complateordertxt'>Sifarişi tamamla</h2>
            <br/>
            <br/>

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
            <br/>
                <div className='row'>
                    <div className='col-sm-12 col-lg-6'>
                        <p className='latest_section_checkout_p'>Ad Soyad</p>
                        <p className='latest_section_checkout_p'>+994 70 727-72-72</p>
                        <p className='latest_section_checkout_p'>test@gmail.com</p>
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <p className='latest_section_checkout_p'>Bakı şəhəri</p>
                        <p className='latest_section_checkout_p'>Qulu Quliyev küçəsi ev 3</p>
                        <p className='latest_section_checkout_p'>Əmircan qəsəbəsi</p>
                        <p className='latest_section_checkout_p'>test@gmail.com</p>
                    </div>
                </div>
                <p className='checkout_bottomcardtext'>
                <Card.Header name='Elave Melumatlar' />
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis.
                </p>
            </Card>
            <br/>
            <Card>
               
                <br/>
                <div>
                <Card.Header name='Ödəmə üsulu' />
                <br/>
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