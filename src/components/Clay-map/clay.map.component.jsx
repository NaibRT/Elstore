

import React, { useState } from 'react';
import  '../../App.scss';
import './clay.style.scss'
import {Link} from 'react-router-dom';


function Clay(){

  const [clay, setClay] = useState([
    {
      "id": 1,
      "clay_head":'Clay Home',
      "clay_bg":'https://i.imgyukle.com/2020/06/09/yfAIyA.jpg',
      "clay_store_img":'https://i.imgyukle.com/2020/06/09/yfAGjP.png',
      "card_title": 'Tamamilə əl işçiliyi olan məhsullar',
    },
    {
      "id": 1,
      "clay_head":'Clay Home',
      "clay_bg":'https://i.imgyukle.com/2020/06/09/yfAIyA.jpg',
      "clay_store_img":'https://i.imgyukle.com/2020/06/09/yfAGjP.png',
      "card_title": 'Tamamilə əl işçiliyi olan məhsullar',
    },
    {
      "id": 1,
      "clay_head":'Clay Home',
      "clay_bg":'https://i.imgyukle.com/2020/06/09/yfAIyA.jpg',
      "clay_store_img":'https://i.imgyukle.com/2020/06/09/yfAGjP.png',
      "card_title": 'Tamamilə əl işçiliyi olan məhsullar',
    },
    {
      "id": 1,
      "clay_head":'Clay Home',
      "clay_bg":'https://i.imgyukle.com/2020/06/09/yfAIyA.jpg',
      "clay_store_img":'https://i.imgyukle.com/2020/06/09/yfAGjP.png',
      "card_title": 'Tamamilə əl işçiliyi olan məhsullar',
    },
    {
      "id": 1,
      "clay_head":'Clay Home',
      "clay_bg":'https://i.imgyukle.com/2020/06/09/yfAIyA.jpg',
      "clay_store_img":'https://i.imgyukle.com/2020/06/09/yfAGjP.png',
      "card_title": 'Tamamilə əl işçiliyi olan məhsullar',
    },
    {
      "id": 1,
      "clay_head":'Clay Home',
      "clay_bg":'https://i.imgyukle.com/2020/06/09/yfAIyA.jpg',
      "clay_store_img":'https://i.imgyukle.com/2020/06/09/yfAGjP.png',
      "card_title": 'Tamamilə əl işçiliyi olan məhsullar',
    },
    {
      "id": 1,
      "clay_head":'Clay Home',
      "clay_bg":'https://i.imgyukle.com/2020/06/09/yfAIyA.jpg',
      "clay_store_img":'https://i.imgyukle.com/2020/06/09/yfAGjP.png',
      "card_title": 'Tamamilə əl işçiliyi olan məhsullar',
    },
    {
      "id": 1,
      "clay_head":'Clay Home',
      "clay_bg":'https://i.imgyukle.com/2020/06/09/yfAIyA.jpg',
      "clay_store_img":'https://i.imgyukle.com/2020/06/09/yfAGjP.png',
      "card_title": 'Tamamilə əl işçiliyi olan məhsullar',
    },
    {
      "id": 1,
      "clay_head":'Clay Home',
      "clay_bg":'https://i.imgyukle.com/2020/06/09/yfAIyA.jpg',
      "clay_store_img":'https://i.imgyukle.com/2020/06/09/yfAGjP.png',
      "card_title": 'Tamamilə əl işçiliyi olan məhsullar',
    },
  ]
  )

  return(
    <div >
    <div className='row'>

    {
        clay.map(({clay_head,clay_bg,clay_store_img,card_title},i)=>{
            return(
                <div key={i} className='col-lg-4 col-md-4 col-sm-6'>
            <div style={{backgroundImage: "url("+clay_bg +")"}} className="card">
                
            <div className="card-overlay">
                    
                    <div className="card-info">

                    <img className="card-info-name" src={clay_store_img} />

                      <h1 className='card-info-text'>{clay_head}</h1>

                        
                        <p className='card-head'>{card_title}</p>
                        <div>
                            <Link to='' className='card-go'>Məhsullara bax <img src={require('../../assets/images/icons/right.svg')} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )                       
        })
    }

      
    </div>
   
</div>
);
}
  

export default Clay;
