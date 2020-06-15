import React, { useEffect } from 'react'
import "../../components/Modal/Modal.scss"
import ReactDom from "react-dom"
import Input from "../InputGroup/InputGroup.component"
import Button from "../button/button.component"

const Modal = () => {

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

    let body=document.getElementsByTagName("body")[0];
    body.addEventListener("click", function(e){
        let login__modal= document.getElementById("login__modal");
        if(e.target==login__modal){
            login__modal.style.display="none"
        }
    })
   

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
            <form action="">
                <Input  placeholder={"Email"} type="email"/>
                <Input placeholder={"Email"} type="password"/>
                <a href="">şifrəmi unutmuşam</a>
                <Button className="bg-primary" type={"submit"} name={"Daxil ol"}  />

            </form>
            </section>
            <section  id="signup_view">
                <form action="">
                <Input placeholder={"Email"} type="email"/>
                <Input placeholder={"Email"} type="password"/>
                <br/>
                <Button className="bg-primary" type={"submit"} name={"Hesab yarat"}  />

                </form>
            </section>
        </div>
        </div>
        , document.getElementById('create-product-popup-root')  
       )
    
}

export default Modal;
