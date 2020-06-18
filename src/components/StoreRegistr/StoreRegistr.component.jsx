import React,{useEffect,useState} from 'react';
import Input from "../InputGroup/InputGroup.component"
import "../StoreRegistr/StoreRegistr.scss"
import { Link } from "react-router-dom";
import Selectbox from '../Select-box/SelectBox.component'
import Button from "../button/button.component"


const StoreRegistr= (props) => {

   function AddNumber(){
       const weple= document.querySelector(".weple");
       const div = document.createElement("div");
       div.classList.add("registr__input");
       weple.appendChild(div);
       const div1=document.createElement("div")
       div1.classList.add("inputForm");
       div.appendChild(div1);
       const div2=document.createElement("div");
       div2.classList.add("inputForm_iconcontainer")
       div1.appendChild(div2);
       const input =document.createElement("input")
       div2.appendChild(input);
       input.classList.add("inputForm_input")
       input.placeholder="Əlaqə nömrəsi"
   }




    const [cities,setCities] = useState({
        data:[]
    })
    const [region,setRegion] = useState({
        data:[]
    })
    const [villages,setVillages] = useState({
        data:[]
    })
    
    function takeSelectboxValue(e){
        console.log(e.target.value);
      fetch(`http://139.180.144.49/api/v1/az/regions?city_id=${e.target.value}`)
      .then(response => response.json())
      .then(data => setRegion({ data: data }));
    
    }

    function takeSelectboxValue1(e){
        console.log(e.target.value);
      fetch(`http://139.180.144.49/api/v1/az/villages?region_id=${e.target.value}`)
      .then(response => response.json())
      .then(data => setVillages({ data: data }));
    
    }
    
    
    
    useEffect(() => {
       
      fetch('http://139.180.144.49/api/v1/az/cities')
      .then(response => response.json())
      .then(data => setCities({ data: data }));
    }, [])
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-xs-12">
                    <div className="Store__Register">
                      <div className="redirect__page">
                          <span><img src={require(`../../assets/images/icons/Iconprev.svg`)} alt=""/></span>
                                <Link className="rediretc__text" to="/">gerİ dön</Link>
                       </div>
                       <div className="store__registr--text">
                           <h5>Mağaza qeydiyyatı</h5>
                       </div>
                       <div className="registr__input">
                       <Input helper="Helper text" countertext="0/256" type="text" placeholder="Mağazanın adı" />
                       </div>
                       <div className="registr__input">
                       <Input helper="Helper text" countertext="0/256" type="password" placeholder="Password" />
                       </div>
                       <div className="registr__input">
                       <Input helper="Helper text" countertext="0/256" type="text" placeholder="Mağaza haqqında ümumi məlumat" />
                       </div>
                       <div className="registr__input">
                       <Input helper="Helper text" countertext="0/256" min="1" max="3" type="email" placeholder="Email" />
                       </div>
                       <div className="registr__input">
                       <Input helper="Helper text" countertext="0/256" min="1" max="3" type="text" placeholder="Əlaqə nömrəsi" />
                       </div>
                       <div className="weple">

                       </div>
                        <div className="add__number" id="addedNumber" onClick={AddNumber}><p>+Başqa nömrə əlavə et</p></div>
                        <div className="add__adress"><p>Ünvan</p></div>
                        <div className="select__city">
                         <Selectbox firstopt='Cities' handleChange={takeSelectboxValue} class='selectboxcheckout' options={cities.data.data} />
                         </div>
                        <br/>
                        
                            {(region.data.data!=undefined && region.data.data.length>0)? <div className="select__city" id="region"><Selectbox firstopt='Region'  handleChange={takeSelectboxValue1} class='selectboxcheckout' options={region.data.data} /></div>:null}
                        
                        <br/>
                       
                        {(villages.data.data!=undefined && villages.data.data.length>0 && region.data.data.length>0)?  <div className="select__city" id="village"><Selectbox id="village" firstopt='Village'  class='selectboxcheckout' options={villages.data.data} /></div>:null}
                        
                        <br/>

                       
                        <div className="select__city">
                       <Input  min="1" max="3" type="text" placeholder="Unvan" />
                       </div>
                       
                           <Button className="registr__button" name="Davam Et"/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
            
       
    )
}

export default StoreRegistr;
