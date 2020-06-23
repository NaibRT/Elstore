import React,{useContext} from 'react'
import {Link} from "react-router-dom"
import "../CompanyAdd/CompanyAdd.scss"
import Button from "../button/button.component"
import Checkbox from '../checkbox/checkbox'
import DataTable from "../datatable checkbox/datatable_checkbox"
import Tab from "../tab/tab-component"
import InputGroup from "../InputGroup/InputGroup.component"
import { useState } from 'react'
import { appContext } from '../../contexts/appContext'
import UrlGenerator from '../../services/url-generator'

const company={
    
    status:1,
    az:{
        campaign_name:'',
        campaign_description:'',

    },
    en:{
      campaign_name:'',
      campaign_description:''
    },
    ru:{
        campaign_name:'',
        campaign_description:''
    }
  
   }

const CompanyAdd = () => {

    const AppContext=useContext(appContext)
    const[company,setCompany]=useState([])

    const Sender=()=>{
        let newFormdata=new FormData();
        newFormdata.append('az',company.az);
        newFormdata.append('en',company.en);
        newFormdata.append('ru',company.ru);
        newFormdata.append('status',company.status);
        newFormdata.append('_method',"PATCH");
     
        let url=UrlGenerator("az",'compaigns');
        let token=AppContext.events.getToken();
        if(token!=null){
            fetch(url,{
              method:'Post',
              body:newFormdata,
              headers:{
                'Authorization':`${token.token_type} ${token.access_token}`,
                'Content-Type': 'form-data',
                'enctype' : 'form-data',}
            })
            .then(async res=>{
              if(res.ok){
                let r=await res.json()
              }
            })
            .catch(err=>console.log(err))
          }else{
          }
    }

    const getName=(e)=>{
        let value=e.target.value
        let lang=e.target.closest('.pro-name').getAttribute('data-lang');
       //  setProduct({
       //    ...product,
       //    [`${lang}`]:{
       //      ...product[lang],
       //      product_name:value}
       //  })
    //    product[lang.toString()].product_name=value;
      }
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
              <form>
                  <div className="tab__center">
                  <Tab clas='pro-name' id='name'>
                    <Tab.Page id='az-name' clas='pro-name' lang='az'>
                        <div className="input__company display__flex">
                        <div className="input_companyadd">
                        <InputGroup onChange={getName} type='text' placeholder='Kompaniyanın adı' />
                        </div>
                        <div className="input__company-info">
                            <InputGroup onChange={getName} type='text' placeholder='Təyinat' />
                        </div>
                        </div>
                    </Tab.Page>
                    <Tab.Page id='en-name' style={{'display':'none'}} clas='pro-name' lang='en'>
                    <div className="input__company display__flex">
                        <div className="input_companyadd">
                        <InputGroup onChange={getName} type='text' placeholder='Company name' />
                        </div>
                        <div className="input__company-info">
                            <InputGroup onChange={getName} type='text' placeholder='Description' />
                        </div>
                        </div>

                    </Tab.Page>
                    <Tab.Page id='ru-name' style={{'display':'none'}} clas='pro-name' lang='ru'>
                    <div className="input__company display__flex">
                        <div className="input_companyadd">
                        <InputGroup onChange={getName} type='text' placeholder='Название компании' />
                        </div>
                        <div className="input__company-info">
                            <InputGroup onChange={getName} type='text' placeholder='Описание' />
                        </div>
                        </div>
                    </Tab.Page>
                </Tab>
                  </div>
               
                </form>
               
                
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

                <Button onClick={Sender} name="Kampaniyanı Yarat" className="company__create"/>
                </div>

            </div>
        </div>
    )
}

export default CompanyAdd;
