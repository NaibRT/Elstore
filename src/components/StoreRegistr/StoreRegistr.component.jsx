import React,{useEffect,useState,useContext} from 'react';
import Input from "../InputGroup/InputGroup.component"
import "../StoreRegistr/StoreRegistr.scss"
import { Link } from "react-router-dom";
import Selectbox from '../Select-box/SelectBox.component'
import Button from "../button/button.component"
import {useForm} from 'react-hook-form'
import {appContext} from '../../contexts/appContext'
import swal from "sweetalert"
import UrlGenerator from '../../services/url-generator'
import GoBack from '../go-back/go-back.component'
import { useHistory } from "react-router-dom";
import SelectBox from "../Select-box/SelectBox.component"

const StoreRegistr= (props) => {
    let history = useHistory();
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


   const {register:register2,handleSubmit:handleSubmit2,errors:errors2}=useForm();
   const [texturl,setTexturl]=useState({
       selected:'',
       x:[
        {
            id:'seller',
            name:"Fərdi"
        },
        {
            id:'company',
            name:"Korparativ"
        }       
     ]
    })


console.log(texturl)

   function TextUrl(e){
    setTexturl({
        ...texturl,
        selected:e.target.value
    })
   }

   const AppContext=useContext(appContext)
   const registerSubmit=(data)=>{
    let url=UrlGenerator('az',`auth/${texturl.selected}/register`)
    console.log(data)
   fetch(url,{
       headers:{
         'Content-Type': 'application/json'
       },
       method:"Post",
       body:JSON.stringify(data)
   })
   .then(async res=>{
       if(res.ok){
        let data=await res.json();
        AppContext.events.AddToken(data)
        history.push("/");
        swal("Təbriklər", "Qeydiyyatınız uğurla tamamlandı!", "success");
       }else{
        swal("Təəssüflər", "Bu adda email artıq mövcuddr", "error");
       }
      
   })
   .catch((err) =>console.log(err))
   console.log(errors2.email)
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
        let url=UrlGenerator('az',`regions?city_id=${e.target.value}`)
      fetch(url)
      .then(response => response.json())
      .then(data => setRegion({ data: data }));
    
    }

    function takeSelectboxValue1(e){
       let url=UrlGenerator('az',`villages?region_id=${e.target.value}`)
      fetch(url)
      .then(response => response.json())
      .then(data => setVillages({ data: data }));
    
    }
    
    
    
    useEffect(() => {
       let url=UrlGenerator('az','cities');
      fetch(url)
      .then(response => response.json())
      .then(data => setCities({ data: data }));
    }, [])
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-xs-12">
                    <div className="Store__Register">
                        <GoBack link="/" text="Geri dön"/>
                        <form onSubmit={handleSubmit2(registerSubmit)}>
                       <div className="store__registr--text">
                           <h5>Mağaza qeydiyyatı</h5>
                       </div>
                       <div className="registr__input">
                       <SelectBox firstopt={"Mağaza növünü seçin"} handleChange={(e)=>TextUrl(e)} options={texturl.x} />
                       </div>
                       <div className="registr__input">
                       <Input name='name' type='text' placeholder='Mağaza adı' register={register2({
                required:{value:true,message:'name is required'},
                maxLength:{value:255,message:'max  255 char need'}
            })} helper={errors2.name&&errors2.name.message}/>
                       </div>
                       <div className="registr__input">
                       <Input name='password'  placeholder={"Şifrə"} type="password" register={register2({required:'cannot be null',minLength:{value:5,message:'cannot be less 8'}})} helper={errors2.password&&errors2.password.message}/>
                       </div>
                       <div className="registr__input">
                       <Input   type="text" placeholder="Mağaza haqqında ümumi məlumat" />
                       </div>
                       <div className="registr__input">
                       <Input name='email'  placeholder={"Email"} type="email" register={register2({
                required:{value:true,message:'must be added'},
                pattern:{value:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message:"email not valid"}
                })}
                helper={errors2.email&&errors2.email.message}/>
                       </div>
                       <div className="registr__input">
                       <Input name='phones[phone]' type='tel' placeholder='phone' register={register2({
                required:{value:true,message:'name is required'},
                maxLength:{value:255,message:'max 255 char need'}
            })} helper={errors2.name&&errors2.name.message}/>
                       </div>
                       
                       <div className="weple">

                       </div>
                        <div className="add__number" id="addedNumber" onClick={AddNumber}><p>+Başqa nömrə əlavə et</p></div>
                        <div className="add__adress"><p>Ünvan</p></div>
                        <div className="select__city">
                         <Selectbox register={register2({
                             required:{value:true,value:'can not be null'}
                         })} name="city_id"  firstopt='Cities' handleChange={takeSelectboxValue} class='selectboxcheckout' options={cities.data.data} />
                         </div>
                        <br/>
                        
                            {(region.data.data!=undefined && region.data.data.length>0)? <div className="select__city" id="region"><Selectbox firstopt='Region'  handleChange={takeSelectboxValue1} class='selectboxcheckout' options={region.data.data} /></div>:null}
                        
                        <br/>
                       
                        {(villages.data.data!=undefined && villages.data.data.length>0 && region.data.data.length>0)?  <div className="select__city" id="village"><Selectbox id="village" firstopt='Village'  class='selectboxcheckout' options={villages.data.data} /></div>:null}
                        
                        <br/>

                       
                        <div className="select__city">
                       <Input name='address' type='text' placeholder='Ünvan' register={register2({
                required:{value:true,message:'name is required'},
                maxLength:{value:255,message:'max  255 char need'}
            })} helper={errors2.name&&errors2.name.message} />
                       </div>
                       
                           <Button   className="registr__button" name="Davam Et"/>
                        <br/>
                        <br/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            
       
    )
}

export default StoreRegistr;
