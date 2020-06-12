import React from 'react';
import Chips from '../chips/chips.component'
import ButtonRating from '../button-rating/buttonRating.component'
import './seller.scss';

function Seller(props){
    return(

         
  
 
            <React.Fragment>

     
            
            <div className="box_1">
                <div className="content">
                                <div className="content__img display__flex">
                                <span className="box__img">
                                <img src={require(`../../assets/images/heading/Image.png`)} alt=""/>
                                </span>
                        
                                <div className="texture"><div className="text_1"><h2>Öz Home</h2></div>

                                <Chips rating="(542 rəy)" store="340" />
                                </div>
                                
                                </div>
                
                    
                                        
                                        <div className="line display__flex">
                                        <ButtonRating name='Yuksek rating' class='bg-gold' icon={require('../../assets/images/icons/star.svg')}/>
                                                        <div className="line__right display__flex">
                                                        <h3>əlaqə</h3>
                                                        <img src={require(`../../assets/images/heading/Chevron.svg`)} alt=""/>
                                                        </div>
                                    
                                        </div>


                                           <div className="border__hr"></div> 


                                    <div className="bottom__line display__flex">

                                    <img src={require('../../assets/images/heading/add.svg')} alt=""/> 
                                            <div className="shop_click display__flex">
                                            <img src={require('../../assets/images/heading/seeshop.svg')} alt="" width="116px" height="21px" /> 
                                            <div className="union display__flex">
                                            <img src={require(`../../assets/images/heading/munion.svg`)} alt=""  />
                                            </div>
                                            </div>
                                    
                                    </div>

                                    
                                    
                                    </div>
                
                
                </div>
            
            

       
        </React.Fragment>

    )
}

export default Seller;