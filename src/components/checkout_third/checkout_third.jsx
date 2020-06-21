import React, { useContext, useEffect,useState } from 'react'
import './checkout_third.scss';
import Badge from '../step-badge/badge.component'
import Card from '../card/card.component'
import InputGroup from "../InputGroup/InputGroup.component";
import {Link} from 'react-router-dom';
import {appContext} from '../../contexts/appContext';
import UrlGenerator from '../../services/url-generator';
function CheckoutThird(props) {
    const AppContext=useContext(appContext);
    const [state,setState]=useState({
        city:'',
        region:''
    })

    useEffect(()=>{
        let url=UrlGenerator('az',`cities/${AppContext.total.user.city_Id}`)
    })
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
           <div className='card_head_flex'>
            <div><Card.Header name='Çatdırılma ünvanı' /></div>
            <div>
                <button onClick={props.stepOne}>Düzəlİş et</button>
            </div>

           </div>
            
            <br/>
                <div className='row'>
                    <div className='col-sm-12 col-lg-6'>
                        <p className='latest_section_checkout_p'>{AppContext.total.user.name}</p>
                        <p className='latest_section_checkout_p'>{AppContext.total.user.phone}</p>
                        <p className='latest_section_checkout_p'>{AppContext.total.user.email}</p>
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <p className='latest_section_checkout_p'>{AppContext.total.user.city}</p>
                        <p className='latest_section_checkout_p'>{AppContext.total.user.address}</p>
                        <p className='latest_section_checkout_p'>{AppContext.total.user.region}</p>
                    </div>
                </div>
                <p className='checkout_bottomcardtext'>
                <Card.Header name='Elave Melumatlar' />
                {AppContext.total.user.information}
                </p>
            </Card>
            <br/>
            <Card>
               
                <br/>
                <div>
                <div className='card_head_flex'>
                    <div><Card.Header name='Ödəmə üsulu' /></div>
                    <div>
                        <button onClick={props.stepTwo}>Düzəlİş et</button>
                    </div>
                </div>

              
                <br/>
                   <div className='creditCard'>
                    <p>Onlayn ödəmə</p>
                    <p>4169 ···· ···· ··45 nömrəli kart vasitəsi ilə</p>
                   </div> 
                </div>
            </Card>
            <br/>
            <button   className='form_button_multiple' >SİFARİŞ ET</button>
       </>
    )
}

export default CheckoutThird
