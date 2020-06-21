import React, { useContext } from 'react'
import './checkout_second.scss';
import Badge from '../step-badge/badge.component'
import Card from '../card/card.component'
import InputGroup from "../InputGroup/InputGroup.component";
import {Link} from 'react-router-dom';

import ButtonRadio from "../button-radio/ButtonRadio.component";
import {appContext} from '../../contexts/appContext';

function CheckoutSecond(props) {
    const AppContext=useContext(appContext)
    
    function goNextPage(e){
        e.preventDefault();
        props.nextStep();
    };

    //  function cardNumber(e){
    //     console.log(e.target)
    //     AppContext.setTotal({
    //         ...AppContext.total,
            
    //     })
    //  }

    //  function StartDate(e){
    //     console.log(e.target)

    // }

    // function EndDate(e){
    //     console.log(e.target)
    // }

    function PaymentType(e){
        AppContext.events.setTotal({
            ...AppContext.total,
            user:{
                ...AppContext.total.user,
                payment_type:0
            }
        })
    }
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
            <Badge class='badge badge-active' icon={require('../../assets/images/icons/payment primary.svg')} name='Ödəniş'/>
            <div className='badge_href' />
            <Badge class='badge ' icon={require('../../assets/images/icons/Verify.svg')} name='Sifariş et'/>
            </div>
            <br/>
            <Card>
            <Card.Header name='Ödəmə üsulu seçin' />
            <br/>
                <div className='row'>
                    <div className='col-sm-12 col-lg-6'>
                        <ButtonRadio change={(e)=>PaymentType(e)} class='full_check' name='Qapıda ödəmə' nextName='Nəğd və ya kart vasitəsilə' />
                        <br/> 
                        <ButtonRadio change={(e)=>PaymentType(e)} class='full_check' name='Onlayn ödəmə' nextName='Kart vasitəsilə' />
                        <br/>
{/*                    <Card.Header name='Kart məlumatlarını daxil edin' />
                    <br/>
                    <InputGroup onChange={(e)=>{cardNumber(e)}} required='required' formIcon={require('../../assets/images/icons/Frame.svg')} placeholder='Kartın üzərindəki nömrə' />
                    <br/>
                    <div className='row'>
                        <div className='col-lg-6'>
                        <InputGroup onChange={(e)=>{StartDate(e)}} required='required' formIcon={require('../../assets/images/icons/Frame.svg')} placeholder='Bitmə tarixi' />
                        </div>
                        <div className='col-lg-6'>
                        <InputGroup onChange={(e)=>{EndDate(e)}} required='required' formIcon={require('../../assets/images/icons/Frame.svg')}  placeholder='CVV' />
                        </div>
    </div>*/}
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
