import React from 'react'
import './checkout_second.scss';
import Badge from '../step-badge/badge.component'
import Card from '../card/card.component'
import InputGroup from "../InputGroup/InputGroup.component";

function CheckoutSecond(props) {

    function goNextPage(e){
        e.preventDefault();
        props.nextStep();
    };
    return (
        <>
           
            <div className='checkout_header'>
            <Badge class='badge badge-done' icon={require('../../assets/images/icons/box white.svg')} name='Catdirilma'/>
            <div className='badge_href' />
            <Badge class='badge badge-active' icon={require('../../assets/images/icons/payment primary.svg')} name='Ödəniş'/>
            <div className='badge_href' />
            <Badge class='badge ' icon={require('../../assets/images/icons/Verify.svg')} name='Sifariş et'/>
            </div>
            <br/>
            <Card>
            <Card.Header name='Ödəmə üsulu seçin' />
                <div className='row'>
                    <div className='col-sm-12 col-lg-6'>
                        <InputGroup placeholder='Adınız' />
                        <br/>
                        <Card.Header name='Kart məlumatlarını daxil edin' />
                        <InputGroup required='required' formIcon={require('../../assets/images/icons/Frame.svg')} placeholder='Telefon nömrəsi' />
                        <br/>
                        <InputGroup required='required' formIcon={require('../../assets/images/icons/Frame.svg')} placeholder='E-poçt adresi' />
                        <br/>
                        <InputGroup required='required' placeholder='Soyadınız' />
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        
                    </div>
                </div>
            </Card>
            <br/>
            <button className='form_button_multiple' onClick={goNextPage} >MƏLUMATLARI TƏSDİQLƏ</button>
       </>
    )
}

export default CheckoutSecond
