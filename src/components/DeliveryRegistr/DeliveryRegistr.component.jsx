import React from 'react'
import {Link} from "react-router-dom"
import "../DeliveryRegistr/DeliveryRegistr.scss"
import Input from "../InputGroup/InputGroup.component"
import Button from "../button/button.component"
const DeliveryRegistr = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-xs-12">
                <div className="delivery__registr">
                    <div className="redirect__page">
                        <span><img src={require(`../../assets/images/icons/Iconprev.svg`)} alt=""/></span>
                        <Link className="rediretc__text" to="/">gerİ dön</Link>
                    </div>
                    <div className="store__registr--text">
                    <h5>Kuryer olaraq çalış</h5>
                    </div>   
                    <div className="registr__input">
                        <div>
                            <Input  type="text" placeholder="Adınız" />
                        </div>
                        <div>
                            <Input type="text" placeholder="Soyadınız" />
                        </div>
                    </div>  
                    <div className="delivery_phone">
                        <Input placeholder="Telefon nömrəsi" type="number" formIcon={require(`../../assets/images/icons/Frame.svg`)}/>
                    </div>   
                    <div className="delivery_phone">
                        <Input placeholder="Telefon nömrəsi" type="email" formIcon={require(`../../assets/images/icons/Frame.svg`)}/>
                    </div>   
                    <div className="delivery_info">
                        <Input placeholder="Haqqınızda əlavə məlumat" type="email"  />
                    </div>  
                          <div className="Delivery__button">
                            <Button className="btn__Delivery" name="Daxil ol"/>
                          </div>
                          <br/>
                        
                </div>
                </div>
            </div>
        </div>
        
    )
}

export default DeliveryRegistr;
