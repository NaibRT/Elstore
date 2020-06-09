import React from 'react'

import './heartImage.component.scss';

function showHide(){
    let firstImg = document.querySelector('.hearts_icon')
    if(firstImg.childNodes[0].style.display === 'block'){
        firstImg.childNodes[0].style.display = 'none';
        firstImg.childNodes[1].style.display = 'block';
    }else{
        firstImg.childNodes[1].style.display = 'none';
        firstImg.childNodes[0].style.display = 'block';
    }
}

function HeartImage() {
    return (
        <div onClick={showHide} className="hearts_icon">
            <img src={require('../../assets/images/icons/Enabled.svg')} alt=""/>
            <img src={require('../../assets/images/icons/Active2.svg')} alt=""/>
        </div>
    )
}

export default HeartImage
