import React, { useState } from 'react';
import  '../../App.scss';
import './mehsul_card.component.scss';
import {Link} from 'react-router-dom';
function MehsulCard() {
    const [card,setCard] = useState([
          {
            "id": 1,
            "card_head": 'Bütün məhsullarda 25% endirim',
            "card_back": 'https://i.imgyukle.com/2020/06/09/yfAIyA.jpg',
            "card_store_img": 'https://i.imgyukle.com/2020/06/09/yfAGjP.png',
            "card_store": "Clay Home",
          },
          {
            "id": 1,
            "card_head": 'Bütün məhsullarda 25% endirim',
            "card_back": 'https://i.imgyukle.com/2020/06/09/yfAIyA.jpg',
            "card_store_img": 'https://i.imgyukle.com/2020/06/09/yfAGjP.png',
            "card_store": "Clay Home",
          },
          {
            "id": 1,
            "card_head": 'Bütün məhsullarda 25% endirim',
            "card_back": 'https://i.imgyukle.com/2020/06/09/yfAIyA.jpg',
            "card_store_img": 'https://i.imgyukle.com/2020/06/09/yfAGjP.png',
            "card_store": "Clay Home",
          },
          {
            "id": 1,
            "card_head": 'Bütün məhsullarda 25% endirim',
            "card_back": 'https://i.imgyukle.com/2020/06/09/yfAIyA.jpg',
            "card_store_img": 'https://i.imgyukle.com/2020/06/09/yfAGjP.png',
            "card_store": "Clay Home",
          },
          
        ]
      )
        return (
            <div >
              <div className="row">
                <div className="col-lg-12">
                      <div className="discount_title">
                          <h5>Endirimler</h5>
                      </div>
                </div>
              </div>
                <div className='row'>
                {
                    card.map(({card_head,card_back,card_store_img,card_store},i)=>{
                        return(
                            <div key={i} className='col-lg-6 col-md-12'>
                        <div style={{backgroundImage: "url("+card_back +")"}} className="e-card">
                            <div className="e-card-overlay">
                                <p className="e-card-head">{card_head}</p>
                                <div className="e-card-info">
                                    <img className="e-card-info-name" src={card_store_img} />
                                    <p className='e-card-info-text'>{card_store}</p>
                                    <div>
                                        <Link to='/product' className='e-card-go'>Məhsullara bax <img src={require('../../assets/images/icons/right.svg')} /></Link>
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

export default MehsulCard;
