import React from 'react'
import './ButtonRadio.component.scss'

function clickAll(e){

    console.log(e.currentTarget);

    if(e.currentTarget.children[0].children[0].children[0].checked == false){
        e.currentTarget.children[0].children[0].children[0].checked = true;
    }else{
        e.currentTarget.children[0].children[0].children[0].checked = false;
        
    }

    
}



function ButtonRadio(props) {
    return (
        <div onClick={(e) => clickAll(e)} tabIndex="-1" id="radioButtonBody" className="radio_button__body">
            <div className="radio_button__content">
                <div id="radioButtonContent" className="radio-box">
                    <input id="radioButton" type="radio" name="choosed"/>
                    <span></span>
                </div>
            </div>
            <div className="radio_button__text">
                <p>{props.name}</p>
                <p>{props.name}</p>
            </div>
        </div>

    )
}

export default ButtonRadio
