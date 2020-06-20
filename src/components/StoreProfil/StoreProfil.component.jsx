import React from 'react'
import "../StoreProfil/StoreProfil.scss"
import Button from "../button/button.component"
import Input from "../InputGroup/InputGroup.component"

const StoreProfil = () => {
    function previewFile1() {
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
                <div className="col-lg-6 col-md-12 col-xs-12">
                    <div className="Store__Photo--text">
                        <h5>profİl şəklİ</h5>
                        <div className="profile__photo">
                                        <div className="profil__images">
                                            <input onChange={previewFile1} type="file"/>
                                            <img className="profilePhoto" src={require(`../../assets/images/icons/Increase.svg`)} alt=""/>
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
                                    <div className="input-_area">
                                    <Input type="text" placeholder="Username694841"/>
                                    </div>
                                    <div className="borders"></div>
                     </div>
                     <div className="profile--image_Store store">
                                    <div className="userName_edit">
                                        <h5>Mağaza haqqında</h5>
                                        <a href="">Düzəliş et</a>
                                    </div>
                                    <div className="Store__info">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eaque, esse aliquid omnis ab exercitationem magnam minus quos iure unde nemo reprehenderit iusto veniam assumenda itaque dolorem voluptates consequatur neque.</p>
                                    </div>
                                    <div className="borders"></div>
                     </div>
                     <div className="profile--image_Username mail">
                                    <div className="userName_edit">
                                        <h5>Email</h5>
                                        <a href="">Düzəliş et</a>
                                    </div>
                                    <div className="input-_area">
                                    <Input type="email" placeholder="username@elstore.az"/>
                                    </div>
                                    <div className="borders"></div>
                     </div>
                     <div className="profile--image_Username pass ">
                                    <div className="userName_edit">
                                        <h5>Şİfrə</h5>
                                        <a href="">Düzəliş et</a>
                                    </div>
                                    <div className="input-_area">
                                    <Input type="password" placeholder="***************"/>
                                    </div>
                                    <div className="borders"></div>
                     </div>
                     <div className="profile--image_Username  ">
                                    <div className="userName_edit phone ">
                                        <h5>əlavə nömrəsİ</h5>
                                        <a href="">Düzəliş et</a>
                                    </div>
                                    <div className="input-_area number__delete">
                                        <p>+99470707070</p>
                                      <a href="">Sil</a>
                                    </div>
                                    <div className="borders1"></div>
                     </div>
                     <Button className="button_delete--acc" name="Hesabi sil"/>
                </div>
                <div className="col-lg-6 col-md-12 col-xs-12">
                <div id="Adress__Data" >
                                <div  className="delivery_mapping">
                                    <div className="delivery__heading">
                                        <h5>ünvan</h5>
                                    </div>
                                    <div className="delivery__edit">
                                    <a href="">Düzəliş et</a>
                                    <a href="">Sil</a>
                                    </div>
                                </div>
                                <div  className="adress--data"    >
                                    <p>Bakı şəhəri</p>
                                    <p>Suraxanı rayonu</p>
                                    <p>Əmircan qəsəbəsi</p>
                                    <p>Qulu Quliyev küçəsi ev 3</p>
                                </div>
                                </div>
                </div>
            </div>
        </div>
    )
}

export default StoreProfil;
