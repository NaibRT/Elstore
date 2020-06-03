import React from 'react'

import './IconDeliverySafetyPayback.component.scss';

function IconDeliverySafetyPayback(){
    return (
        <section className="icons__delivery__safety__payback__section">
            <div className="delivery__icon">
                <img src={require('../../assets/images/slider/icons/shipping-icon.svg')} alt=""/>
                <h4>PULSUZ ÇATDIRILMA</h4>
                <p>Bakı şəhəri üzrə</p>
            </div>
            <div className="payback__icon">
                <img src={require('../../assets/images/slider/icons/Group-1.svg')} alt=""/>
                <h4>15 GÜN GERİ QAYTARMA</h4>
                <p><span>Geri qaytarma şərtləri</span> daxilində</p>
            </div>
            <div className="safety__icon">
                <img src={require('../../assets/images/slider/icons/Group-41.svg')} alt=""/>
                <h4>GÜVƏNLİ ÖDƏMƏ</h4>
                <p>Təsdiqlənmiş güvənli ödəmə sistemi</p>
            </div>
        </section>
    )
}

export default IconDeliverySafetyPayback;