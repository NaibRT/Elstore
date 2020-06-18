import React, { useState } from 'react'
import Button from "../button/button.component"
import "../ProfilInfo/ProfilInfo.scss"
import Input from "../InputGroup/InputGroup.component"



function Porfilinfo(props) {
   
    const[gorset,setGorsset]=useState(true)

    const [allData,SetallData]=useState({
        field:{
            şəhər:"",
            rayon:"",
            qəsəbə:"",
            mənzil:""
        }
    });

    function Personal() {
       let profile__info_update=document.getElementById('profile__info--update');
       let adress__info_clicked=document.getElementById("adress")
       let active__border= document.querySelector(".active--border");
       let simple__border= document.querySelector(".simple--border");
       profile__info_update.style.display="block"
       adress__info_clicked.style.display="none"
       simple__border.style.border="2px solid #D0D0D0";
       active__border.style.border="2px solid #6472B8";
    }
    function Adress() {
        let profile__info_update=document.getElementById('profile__info--update');
        let adress__info_clicked=document.getElementById("adress")
        let active__border= document.querySelector(".active--border");
        let simple__border= document.querySelector(".simple--border");
        profile__info_update.style.display="none"
        adress__info_clicked.style.display="block"
        simple__border.style.border="2px solid #6472B8";
        active__border.style.border="2px solid #D0D0D0";
     }
     function previewFile() {
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


    const Itir=()=>{
        let button__adress=document.querySelector(".button__adress");
        let text__form= document.getElementById("text__form");
        button__adress.style.display="none";
        text__form.style.display="block";
    }

   const handleSubmit=(e)=>{
        e.preventDefault();
        let Adress__Data=document.getElementById("Adress__Data");
        let text__form= document.getElementById("text__form");
        text__form.style.display="none";
        Adress__Data.style.display="block"
        
    }

    const handleChange=(e)=>{
        
        e.preventDefault();
        SetallData({field:{
            ...allData.field,
            [e.target.name]:e.target.value
        }})
    }


    return (
       
               <>
                    <div className="row">
                    <div className="col-lg-9 col-md-12 col-xs-12">
                            <div className="profil__info-owner">
                                <div className="profil__info--offer">
                                    <div onClick={Personal} id="profile__info-clikced">
                                        <h5>məlumatlar</h5>
                                        <div className="active--border"></div>
                                    </div>
                                    <div onClick={Adress} id="adress__info-clicked">
                                        <h5>ünvan</h5>
                                        <div className="simple--border"></div>
                                    </div>
                                    {/* <div>
                                        <h5>ödəmə üsulu</h5>
                                        <div className="simple--border"></div>
                                    </div> */}
                                </div>
                               <section id="profile__info--update">
                                <div className="profile--image">
                                    <h5>profİl şəklİ</h5>
                                    <div className="profile__photo">
                                        <div className="profil__images">
                                            <input onChange={previewFile} type="file"/>
                                            <img className="profilePhoto" src={require(`../../assets/images/slider/icons/Group 142.svg`)} alt=""/>
                                        </div>
                                        <Button name="Yukle"/>                      
                                    </div>
                                   <div className="borders"></div>
                                </div>
                                <div className="profile--image_Username emails">
                                    <div className="userName_edit">
                                        <h5>İstİfadəçİ adı</h5>
                                        <a href="">Düzəliş et</a>
                                    </div>
                                    <Input type="text" placeholder="Username694841"/>
                                    <div className="borders"></div>
                                </div>
                                <div className="profile--image_Username passw">
                                    <div className="userName_edit">
                                        <h5>Şİfrə</h5>
                                        <a href="">Düzəliş et</a>
                                    </div>
                                    <Input type="password"  placeholder="**************"/>
                                    <div className="borders"></div>
                                </div>
                                <div className="profile--image_Username ">
                                    <div className="userName_edit">
                                        <h5>Email</h5>
                                    </div>
                                    <Input type="Email"  placeholder="example@example.com"/>
                                    <div className="borders"></div>
                                </div>
                                <Button className="button_delete--acc" name="Hesabi sil"/>
                                </section>
                            </div>
                            <section id="adress">
                                <Button onClick={Itir}  className="button__adress" name="ünvan əlavə et"/>
                                <form id="text__form" style={{display:'none'}} action="">
                                    <Input label="Şəhər" name="şəhər" onChange={handleChange}/>
                                    <Input label="Rayon" name="rayon" onChange={handleChange}/>
                                    <Input label="Qəsəbə" name="qəsəbə" onChange={handleChange}/>
                                    <Input label="Mənzil" name="mənzil" onChange={handleChange}/>
                                    <Button onClick={handleSubmit} id="saxla" id="saxla" type="button" name="Saxla"/>
                                </form>
                                <div id="Adress__Data" style={{display:'none'}}>
                                <div  className="delivery_mapping">
                                    <div className="delivery__heading">
                                        <h5>çatdırılma ünvanı</h5>
                                    </div>
                                    <div className="delivery__edit">
                                    <a href="">Düzəliş et</a>
                                    <a href="">Sil</a>
                                    </div>
                                </div>
                                <div  className="adress--data"    >
                                    <p>{allData.field.şəhər}</p>
                                    <p>{allData.field.rayon}</p>
                                    <p>{allData.field.qəsəbə}</p>
                                    <p>{allData.field.mənzil}</p>
                                </div>
                                </div>
                            </section>
                            
                    </div>
                  <div className="col-lg-3 col-md-12 col-xs-12">
                            <Button className="button__magaza" name="fərdİ mağaza aç"/>
                            <Button className="button__magaza" name="şİrkət mağazası aç"/>
                            <Button className="button__magaza" name="kuryer olaraq çalış"/>
                    </div>
                    </div>
                    </>  
        )
  
}

export default Porfilinfo




