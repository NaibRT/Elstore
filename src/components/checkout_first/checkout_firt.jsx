import React from 'react'
import './checkout_first.style.scss';
import Badge from '../step-badge/badge.component'
import Card from '../card/card.component'
import InputGroup from "../InputGroup/InputGroup.component";
import {Link} from 'react-router-dom';
import Selectbox from '../Select-box/SelectBox.component'
function CheckoutFrist(props) {

    const {values,handleChange} = props
    
    const sherler = ['Baku','Ganja','Mingechevir']
    const rayonlar = ['Sirvan','Ucar','Kurdamir']
    const kend = ['Bilge','Kurdakhani','Mastaga']

    function goNextPage(e){
        e.preventDefault();
        props.nextStep();
    };
    



    return (
        <>
            <Link className='goBasket' to='/basket' ><img src={require('../../assets/images/icons/next-icon.svg')} /> səbətə gerİ dön</Link>
            <br/>
            <h2 className='complateordertxt'>Sifarişi tamamla</h2>
            <br/>
            <br/>
            <div className='checkout_header'>
            <Badge class='badge badge-active' icon={require('../../assets/images/icons/Box.svg')} name='Catdirilma'/>
            <div className='badge_href' />
            <Badge class='badge ' icon={require('../../assets/images/icons/Payment.svg')} name='Ödəniş'/>
            <div className='badge_href' />
            <Badge class='badge ' icon={require('../../assets/images/icons/Verify.svg')} name='Sifariş et'/>
            </div>
            <br/>
            <Card>
            <Card.Header name='Elaqe Melumatlari' />
            <br/>
                <div className='row'>
                    <div className='col-sm-12 col-lg-6'>
                        <InputGroup placeholder='Adınız' />
                        <br/>
                        <InputGroup formIcon={require('../../assets/images/icons/Frame.svg')} placeholder='Telefon nömrəsi' />
                        <br/>
                        <InputGroup formIcon={require('../../assets/images/icons/Frame.svg')} placeholder='E-poçt adresi' />
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <InputGroup placeholder='Soyadınız' />
                    </div>
                </div>
            </Card>
            <br/>
            <Card>
            <Card.Header name='Çatdırılma ünvanı' />
                <div className='row'>
                    <div className='col-sm-12 col-lg-6'>
                        <Selectbox class='selectboxcheckout' options={sherler} />
                        <br/>
                        <Selectbox class='selectboxcheckout' options={rayonlar} />
                        <br/>
                        <Selectbox class='selectboxcheckout' options={kend} />
                        <br/>
                        <br/>
                        <InputGroup  placeholder='Ünvan' />
                    </div>
                    <div className='col-lg-6 col-sm-12'></div>
                </div>
                <p className='checkout_bottomcardtext'>
                    <h5>Əlavə məlumat (istəyə görə)</h5>
                    Zəhmət olmasa, ünvanı rahat tapmaq üçün ətrafdakı obyektlər və ya ünvana daxil olmaq üçün lazım olan qapı şifrəsi kimi məlumatları bildirin.
                </p>
                <br/>
                <div>
                    <InputGroup countertext='0/256' type="textarea"  placeholder='Ünvan' />  
                </div>
            </Card>
            <br/>
            <button className='form_button_multiple'  onClick={goNextPage} >ÖDƏNİŞ ÜSULU ƏLAVƏ ET</button>
            
       </>
    )
}
export default CheckoutFrist