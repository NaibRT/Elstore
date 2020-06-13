import React from 'react'
import './ButtonRadio.component.scss'

function clickAll(){
    let radioButtonBody = document.getElementById('radioButtonBody');
    let myDiv =  document.querySelector('.radio_button__text');
    if(document.getElementById("radioButton").checked == false)
    {
        document.getElementById("radioButton").checked = true
        radioButtonBody.style.border = '1px solid #6472B8';
        radioButtonBody.style.backgroundColor = '#EDEFFF';
        myDiv.getElementsByTagName('p')[0].style.color = '#6472B8';

    }else{
        document.getElementById("radioButton").checked = false
        radioButtonBody.style.border = '1px solid black';
        radioButtonBody.style.backgroundColor = 'white';
        myDiv.getElementsByTagName('p')[0].style.color = 'black';
        
    }
    // let rate_value;
    // if(document.getElementById('radioButton').checked){
    //     rate_value = document.getElementById('radioButton').value;
    //     alert(rate_value);
    // }


    // alert(ele.value);
    
}



function ButtonRadio() {
    return (
        <div onClick={clickAll} id="radioButtonBody" className="radio_button__body">
            <div className="radio_button__content">
                <div id="radioButtonContent" className="radio-box">
                    <input id="radioButton" type="radio" name="choosed"/>
                    <span></span>
                </div>
            </div>
            <div className="radio_button__text">
                <p>Qapıda ödəmə</p>
                <p>Nəğd və ya kart vasitəsilə</p>
            </div>
        </div>

    )
}

export default ButtonRadio
