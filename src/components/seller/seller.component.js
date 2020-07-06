import React, { useEffect } from 'react';
import Chips from '../chips/chips.component'
import ButtonRating from '../button-rating/buttonRating.component'
import './seller.scss';
import { Link } from 'react-router-dom';

function Seller({seller}){
      
    return (
            <React.Fragment>
            <div className="box_1">
                <div className="content">
                 <div className="content__img display__flex">
                                <span className="box__img">
                                <img src={seller!==undefined?seller.store.logo:null} alt=""/>
                                </span>
                                <div className="texture"><div className="text_1"><h2>{seller!==undefined?seller.name:null}</h2></div>
                                <Chips rating="(0 rəy)" store="0" />
                                </div>                               
                                </div>                                                           
                                        <div className="line display__flex">
                                        <ButtonRating name='Yuksek rating' class='bg-gold' icon={require('../../assets/images/icons/star.svg')}/>
                                                     <br />   
                                        <div className="line__right display__flex">
                                                        {/*<h3>əlaqə</h3>*/}
                                                        {/*<img src={require(`../../assets/images/heading/Chevron.svg`)} alt=""/>*/}
                                                        </div>
                                        </div>
                                           <div className="border__hr"></div> 
                                    <div className="bottom__line display__flex">
                                      <Link to={`/company/${seller!==undefined?seller.id:''}/${seller!==undefined?seller.name:''}`}>
                                      <div onClick=""  className="shop_click display__flex" id="seller" >
                                      <img src={require(`../../assets/images/heading/seeshop.svg`)} alt="" width="116px" height="21px" /> 
                                      <div  className="union display__flex">
                                      <img src={require(`../../assets/images/heading/munion.svg`)} alt=""  />
                                      </div>
                                      </div>
                                      </Link>
                                    </div>
                                    </div>
                </div>
        </React.Fragment>

    )
}

export default Seller;