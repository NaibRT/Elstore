import React,{useState,useContext,useEffect} from 'react'
import {Link} from "react-router-dom"
import "../CompanyAdd/CompanyAdd.scss"
import Input from "../InputGroup/InputGroup.component"
import Button from "../button/button.component"
import Checkbox from '../checkbox/checkbox'
import DataTable from "../datatable checkbox/datatable_checkbox"
import Axios from 'axios'
import UrlGenerator from '../../services/url-generator';
import {appContext} from '../../contexts/appContext'
import { data } from 'jquery'

const thead =['əlave','məhsulun adı','qİymət'];


const CompanyAdd = () => {

    const AppContext = useContext(appContext)
    const [company,setCompany] = useState({
        name:"",
        description:"",
        discount:"",
        img:"",
        data:[]
    })

    const {name, description, discount, img} = company

    const onInputChange = e => {
        setCompany({
            ...company,
             [e.target.name]:e.target.value 
        })
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

    useEffect(() =>{
        let url = UrlGenerator('az','users/my-company')
        let token = AppContext.events.getToken()
        fetch(url,{
            method:"Get",
            headers:{
                'Authorization':
                token!=null? 
                `${token.token_type} ${token.access_token}`: null
            },
        })
        .then(response => response.json())
        .then(data => {
            setCompany({data:data.data[0]})
            console.log(data);
        })
    },[])

    // const getData = () =>{
    //     let url = UrlGenerator('az','search/product')
    //     fetch(url,{
    //         method:"Get",
    //     })
    //     console.log(url);
    // }

    const onSubmit =  e => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("az[campaign_name]",company.name)
        formData.append("az[campaign_description]",company.description)
        formData.append("discount",company.discount)
        formData.append("campaign_image",company.img)
        formData.append('products',company.data.products.id)
        let url = UrlGenerator('az','campaigns')
        let token = AppContext.events.getToken()
        fetch(url,{
            method:"Post",
            headers:{
                'Authorization':`${token.token_type} ${token.access_token}`,
            },
            body:JSON.stringify(formData)

        })

        console.log(formData);
    }
    return (
        
        <div className="container-fluid">
            <div className="row">
                <form onSubmit={e => onSubmit(e)}>
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
                        <Input type="text" placeholder= "Kompaniyanın adı" name="name" value={company.name} onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="input__company-info">
                        <Input type="text" placeholder="Kampaniya haqqında məlumat" name="description" value={company.description} onChange={e => onInputChange(e)}/>
                    </div>
                </div>
                <div className="company__discount">
                    <Input type="number" placeholder="Endirim faizi" name="discount" value={company.discount} onChange={e => onInputChange(e)}/>
                </div>
                <div className="company__coverPhoto">
                    <h5>Kampaniya “cover” rəsmini əlavə edin.</h5>
                    <p>Minimum ölçü 640x248</p>
                </div>
                <div className="profile__photo2">
                     <div className="profil__images">
                      <input onChange={previewFile2} type="file" name="img" value={company.img} onChange={e => onInputChange(e)}/>
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
                
                 <DataTable thead={thead} tbody={company.data.products}/>

                <Button name="Kampaniyanı Yarat" className="company__create"/>
                </div>
                </form>
            </div>
        </div>
    )
}

export default CompanyAdd;
