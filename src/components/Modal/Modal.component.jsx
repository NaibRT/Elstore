import React, { useContext,useEffect,useState } from 'react'
import "../../components/Modal/Modal.scss"
import ReactDom from "react-dom"
import Input from "../InputGroup/InputGroup.component"
import SelectBox from '../Select-box/SelectBox.component'
import Button from "../button/button.component"
import UrlGenerator from '../../services/url-generator'
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
        let url=UrlGenerator('az','cities');
        fetch(url)
        .then(response => response.json())
        .then(data =>{
          setCities({data:data})
          console.log(data)
        });
        console.log(cities)
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

    let body=document.getElementsByTagName("body")[0];
    body.addEventListener("click", function(e){
        let login__modal= document.getElementById("login__modal");
        if(e.target==login__modal){
            login__modal.style.display="none"
        }
    })
   
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
          console.log(data)
         AppContext.events.AddToken(data)
         document.getElementById('login__modal').style.display='none';
      })
      .catch((err) =>console.log(err))
      console.log(errors.email)
   }

   const registerSubmit=(data)=>{
    let url=UrlGenerator('az','auth/buyer/register')
   fetch(url,{
       headers:{
         'Content-Type': 'application/json'
       },
       method:"Post",
       body:JSON.stringify(data)
   })
   .then(async res=>{
       let data=await res.json();
       console.log(data)
      AppContext.events.AddToken(data)
      document.getElementById('login__modal').style.display='none';
   })
   .catch((err) =>console.log(err))
   console.log(errors.email)
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
                <Input  
                     name='email' placeholder={"Email"} type="email"
                     register={register({
                        required:{value:true,message:'must be added'},
                       pattern:{value:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message:"email not valid"}
                     })}
                      helper={errors.email&&errors.email.message}/>

                <Input  name='password'  placeholder={"Email"} type="password" register={register({required:'cannot be null',minLength:{value:5,message:'cannot be less 8'}})} helper={errors.password&&errors.password.message}/>
                <label htmlFor="">şifrəmi unutmuşam</label>
                <Button className="bg-primary" type={"submit"} name={"Daxil ol"}  />
                    <br/>
            </form>
            </section>
            <section  id="signup_view">
        <form onSubmit={handleSubmit2(registerSubmit)}>
            <Input name='name' type='text' placeholder='name' register={register2({
                required:{value:true,message:'name is required'},
                maxLength:{value:255,message:'max  255 char need'}
            })} helper={errors2.name&&errors2.name.message}/>

            <Input name='surname' type='text' placeholder='surname' register={register2({
                required:{value:true,message:'name is required'},
                maxLength:{value:255,message:'max 255 char need'}
            })} helper={errors2.name&&errors2.name.message}/>

            <Input name='phone' type='tel' placeholder='phone' register={register2({
                required:{value:true,message:'name is required'},
                maxLength:{value:255,message:'max 255 char need'}
            })} helper={errors2.name&&errors2.name.message}/>

            <Input name='email'  placeholder={"Email"} type="email" 
            register={register2({
                required:{value:true,message:'must be added'},
                pattern:{value:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message:"email not valid"}
                })}
                helper={errors2.email&&errors2.email.message}/>
{ /*                 <SelectBox options={cities.data.data} name='address' class='selectboxcheckout' register={register({required:'cannot be null'})} />*/}
            <Input   name='password'  placeholder={"Email"} type="password" register={register2({required:'cannot be null',minLength:{value:5,message:'cannot be less 8'}})} helper={errors2.password&&errors2.password.message}/>
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


