import React, { useContext,useEffect,useState } from 'react'
import "../../components/Modal/Modal.scss"
import ReactDom from "react-dom"
import Input from "../InputGroup/InputGroup.component"
import SelectBox from '../Select-box/SelectBox.component'
import Button from "../button/button.component"
import UrlGenerator from '../../services/url-generator'
import swal from "sweetalert"
import {useForm} from 'react-hook-form'
import {appContext} from '../../contexts/appContext'
import Form from '../form/form.component'


function Modal(){
    const {register,handleSubmit,errors}=useForm();
    const {register:register2,handleSubmit:handleSubmit2,errors:errors2}=useForm()
    const [cities,setCities]=useState({
        data:[]
    })
    const AppContext=useContext(appContext)
    
    useEffect(()=>{
      AppContext.events.mobileSideBarOFF()
    })
    useEffect(()=>{
        let url=UrlGenerator('az','cities');
        fetch(url)
        .then(response => response.json())
        .then(data =>{
          setCities({data:data})
        });
    },[])
    function Signin(){
          
        let signup_view= document.getElementById("signup_view");
        let signin_view= document.getElementById("signin_view");
        let border__size_active=document.querySelector(".border__size--active");
         
        let border__size=document.querySelector(".border__size");
         
        signin_view.style.display="block";
        signup_view.style.display="none";
        border__size.style.border ="2px solid #D0D0D0";
        border__size_active.style.border ="2px solid #6472B8";  
    }
    function Signup(){
        let signup_view= document.getElementById("signup_view");
        let signin_view= document.getElementById("signin_view");
        let border__size_active=document.querySelector(".border__size--active");
        let border__size=document.querySelector(".border__size");
        signin_view.style.display="none";
        signup_view.style.display="block";
        border__size.style.border ="2px solid #6472B8";
        border__size_active.style.border ="2px solid #D0D0D0";
    }
    //  function emaliValidation(email){
    //     const re = ;
    //     return re.test(email);
    //  }


    useEffect(() => {
        let body=document.getElementsByTagName("body")[0];
    body.addEventListener("click", function(e){
        let login__modal= document.getElementById("login__modal");
        let deletevalue = document.getElementById("deletevalue")
        let deletevalue1 = document.getElementById("deletevalue1")
        let reg_name=document.querySelectorAll("#reg_name");
        if(e.target==login__modal){
            login__modal.style.display="none"
            deletevalue.value=""
            deletevalue1.value=""
            for (const item of reg_name) {
                item.value=""
            }
        }
    })
    }, []);
    

    const loginSubmit=(data)=>{
       let url=UrlGenerator('az','auth/login')
      fetch(url,{
          headers:{
            'Content-Type': 'application/json'
          },
          method:"Post",
          body:JSON.stringify(data)
      })
      .then(async res=>{
          let data=await res.json();
          if(res.ok){
            AppContext.events.AddToken(data)
            document.getElementById('login__modal').style.display='none';
          }else{
             swal("Təəssüflər", `${data.error}`, "error");
          }
     
      })
      .catch((err) =>console.log(err))
   }

   const registerSubmit=(data)=>{
    let url=UrlGenerator('az','auth/buyer/register')
   fetch(url,{
       headers:{
         'Content-Type': 'application/json',   
       },
       method:"Post",
       body:JSON.stringify(data)
   })
   .then(async res=>{

       if(res.ok){
        let data=await res.json();
        //AppContext.events.AddToken(data)
        swal( "Təbriklər","Zəhmət olmasa emailinizi yoxlayin", "success");
        document.getElementById('login__modal').style.display='none';
        let reg_name=document.querySelectorAll("#reg_name")
        for (const item of reg_name) {
            item.value=""
        }
       }else{
        swal("Təəssüf!", `${data.error}`, "error");
        let reg_name=document.querySelectorAll("#reg_name")
        for (const item of reg_name) {
            item.value=""
        }
       }   
       
   })
   .catch((err) =>console.log(err))
}

    const openResetModal=()=>{
        document.getElementById('login__modal').style.display='none';
        //document.getElementById('reset-password-modal').style.display='flex';
        document.getElementById('reset-password-modal').classList.toggle('d-flex');
    }

    return ReactDom.createPortal(
    <div id="login__modal" className="modal__bacground">
        <div className="modal__view">
            <div className="modal__view--offer">
                   <div onClick={Signin} id="signin" >
                       <h5>Daxil ol</h5>
                       <div className="border__size--active"></div>
                   </div>
                   <div onClick={Signup} id="signup">
                       <h5>Hesab yarat</h5>
                       <div className="border__size"></div>
                   </div>
            </div>

            <section id="signin_view">
            <form onSubmit={handleSubmit(loginSubmit)}>
                <Input id="deletevalue" 
                     name='email' placeholder={"Email"} type="email"
                     register={register({
                        required:{value:true,message:'Email daxil etməlisiniz'},
                       pattern:{value:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message:"email düzgün deyil"}
                     })}
                      helper={errors.email&&errors.email.message}/>

                <Input id="deletevalue1"  name='password'  placeholder={"Şifrə"} type="password" register={register({required:'Şifrə daxil etməlisiniz',minLength:{value:5,message:'8 simvoldan az ola bilmez'}})} helper={errors.password&&errors.password.message}/>
                <label htmlFor="" onClick={openResetModal}>şifrəmi unutmuşam</label>
                <Button className="bg-primary" type={"submit"} name={"Daxil ol"}  />
                    <br/>
            </form>
            </section>
            <section  id="signup_view">
        <form onSubmit={handleSubmit2(registerSubmit)}>
            <Input id="reg_name" name='name' type='text' placeholder='Ad' register={register2({
                required:{value:true,message:'Adınızı daxil etməlisiniz'},
                maxLength:{value:255,message:'maksimum  255 simvol qeyd oluna bilər'}
            })} helper={errors2.name&&errors2.name.message}/>
            

            <Input id="reg_name" name='surname' type='text' placeholder='Soyad' register={register2({
                required:{value:true,message:'Soyadınızı daxil etməlisiniz'},
                maxLength:{value:255,message:'maksimum  255 simvol qeyd oluna bilər'}
            })} helper={errors2.surname&&errors2.surname.message}/>

            <Input id="reg_name" name='phones[phone]' type='number'  placeholder='Telefon' register={register2({
                required:{value:true,message:'Telefon daxil etməlisiniz'},
                maxLength:{value:255,message:'maksimum  255 simvol qeyd oluna bilər'},
            })} helper={errors2.name&&errors2.phones["phone"].message}/>
           

            <Input id="reg_name" name='email'  placeholder={"Email"} type="email" 
            register={register2({
                required:{value:true,message:'Email daxil etməlisiniz'},
                pattern:{value:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message:"email düzgün deyil"}
                })}
                helper={errors2.email&&errors2.email.message}/>
{ /*                 <SelectBox options={cities.data.data} name='address' class='selectboxcheckout' register={register({required:'cannot be null'})} />*/}
            <Input id="reg_name"   name='password'  placeholder={"Şifrə"} type="password" register={register2({required:'Şifrə daxil etməlisiniz',minLength:{value:5,message:'8 simvoldan az ola bilmez'}})} helper={errors2.password&&errors2.password.message}/>
            <br/>
            <Button className="bg-primary" type={"submit"} name={"Hesab yarat"}  />
            <br/>
                </form>
                    
            </section>
        </div>
        </div>
        , document.getElementById('create-product-popup-root')  
       )
    
}

export default Modal;


