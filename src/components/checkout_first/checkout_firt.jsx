import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios'
import './checkout_first.style.scss';
import Badge from '../step-badge/badge.component'
import Card from '../card/card.component'
import InputGroup from "../InputGroup/InputGroup.component";
import {Link} from 'react-router-dom';
import Selectbox from '../Select-box/SelectBox.component'
import {appContext} from '../../contexts/appContext'
import UrlGenerator from '../../services/url-generator'
function CheckoutFrist(props) {
    const AppContext=useContext(appContext)
    
    const {values,handleChange} = props
    const [cities,setCities] = useState({
        data:[]
    })
    const [region,setRegion] = useState({
        data:[]
    })
    // const sherler = ['Baku','Ganja','Mingechevir']
    // const rayonlar = ['Sirvan','Ucar','Kurdamir']
    // const kend = ['Bilge','Kurdakhani','Mastaga']


    useEffect(() => {
            let url=UrlGenerator('az','cities');
            fetch(url)
            .then(response => response.json())
            .then(data =>{
              setCities({data:data})
            });
    }, [])

    function getRegions(e){
        let url=UrlGenerator('az',`regions?city_id=${e.target.value}`);
      fetch(url)
      .then(response => response.json())
      .then(data =>{
       setRegion({data:data})
      });
    }
   
    function goNextPage(e){
        e.preventDefault();
        props.nextStep();
    };

    function nameEventHandler(e){

      AppContext.events.setTotal({

      })
    }
    function phonenameEventHandler(e){
        
    }

    function emailEventHandler(e){
        
    }

    function surnameEventHandler(e){
        
    }

    function regionEventHandler(e){
        
    }
    function cityEventHandler(e) {
        
    }

    function addressEventHandler(e) {
        
    }

    function secoundAddres(e) {
        
    }
    
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
                        <InputGroup onChange={(e)=>{nameEventHandler(e)}} placeholder='Adınız' />
                        <br/>
                        <InputGroup onChange={(e)=>phonenameEventHandler(e)} formIcon={require('../../assets/images/icons/Frame.svg')} placeholder='Telefon nömrəsi' />
                        <br/>
                        <InputGroup onChange={(e)=>emailEventHandler(e)} formIcon={require('../../assets/images/icons/Frame.svg')} placeholder='E-poçt adresi' />
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <InputGroup onChange={(e)=>surnameEventHandler(e)} placeholder='Soyadınız' />
                    </div>
                </div>
            </Card>
            <br/>
            <Card>
            <Card.Header name='Çatdırılma ünvanı' />
                <div className='row'>
                    <div className='col-sm-12 col-lg-6'>
                        <Selectbox firstopt='Cities' handleChange={getRegions} class='selectboxcheckout' options={cities.data.data} />
                        <br/>
                        <Selectbox handleChange={regionEventHandler} firstopt='Region' class='selectboxcheckout' options={region.data.data} />
                        <br/>
                        <Selectbox handleChange={cityEventHandler} class='selectboxcheckout' options={cities.data.data} />
                        <br/>
                        <br/>
                        <InputGroup onChange={(e)=>{addressEventHandler(e)}}  placeholder='Ünvan' />
                    </div>
                    <div className='col-lg-6 col-sm-12'></div>
                </div>
                <p className='checkout_bottomcardtext'>
                    <h5>Əlavə məlumat (istəyə görə)</h5>
                    Zəhmət olmasa, ünvanı rahat tapmaq üçün ətrafdakı obyektlər və ya ünvana daxil olmaq üçün lazım olan qapı şifrəsi kimi məlumatları bildirin.
                </p>
                <br/>
                <div>
                    <InputGroup onChange={(e)=>secoundAddres(e)} countertext='0/256' type="textarea"  placeholder='Ünvan' />  
                </div>
            </Card>
            <br/>
            <button className='form_button_multiple'  onClick={goNextPage} >ÖDƏNİŞ ÜSULU ƏLAVƏ ET</button>
            
       </>
    )
}
export default CheckoutFrist