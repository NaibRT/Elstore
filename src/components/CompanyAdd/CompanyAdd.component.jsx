import React from 'react'
import {Link} from "react-router-dom"
import "../CompanyAdd/CompanyAdd.scss"
import Input from "../InputGroup/InputGroup.component"
import Button from "../button/button.component"
import Checkbox from '../checkbox/checkbox'
import DataTable from "../datatable checkbox/datatable_checkbox"


const CompanyAdd = () => {

    function previewFile2() {
        const preview = document.querySelector('.profilePhoto');

        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();
      
        reader.addEventListener("load", function () {
          // convert image file to base64 string
          preview.src = reader.result;
        }, false);
      
        if (file) {
          reader.readAsDataURL(file);
        }
      }
    return (
        
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                <div className="redirect__page">
                    <span><img src={require(`../../assets/images/icons/Iconprev.svg`)} alt=""/></span>
                    <Link className="rediretc__text" to="/">Kampaniyalara gerİ dön</Link>
                 </div>
                 <div className="store__registr--text">
                    <h5>Mağaza qeydiyyatı</h5>
                </div>

                <button className='basket_header_text'>Kampaniyalar elstore tərəfindən təsdiqləndikdən sonra aktiv olur. Formu tamamlayın və kampaniyanızı təsdiq üçün əlavə edin.</button>
                <div className="input__company display__flex">
                    <div className="input_companyadd">
                        <Input type="text" placeholder= "Kompaniyanın adı"/>
                    </div>
                    <div className="input__company-info">
                        <Input type="text" placeholder="Kampaniya haqqında məlumat"/>
                    </div>
                </div>
                <div className="company__discount">
                    <Input type="number" placeholder="Endirim faizi"/>
                </div>
                <div className="company__coverPhoto">
                    <h5>Kampaniya “cover” rəsmini əlavə edin.</h5>
                    <p>Minimum ölçü 640x248</p>
                </div>
                <div className="profile__photo2">
                     <div className="profil__images">
                      <input onChange={previewFile2} type="file"/>
                     <img className="profilePhoto" src="" alt=""/>
                    </div>
                </div>
                <br/>
                <div className="company__coverPhoto">
                    <h5>Kampaniyaya məhsulları əlavə edin.</h5>
                    <p>Kampaniyanın keçərli olacağı məhsulları əlavə edin.</p>
                </div>
                <div className="company_product-text">
                    <h5>Toplam 0 məhsul əlavə edildi.</h5>
                </div>
                
                <Checkbox>
                <DataTable/>
                </Checkbox>

                <Button name="Kampaniyanı Yarat" className="company__create"/>
                </div>

            </div>
        </div>
    )
}

export default CompanyAdd;
