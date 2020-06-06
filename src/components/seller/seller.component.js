import React from 'react';
import Chips from '../chips/chips.component'
import './seller.scss';

function Seller(props){
    return(

         
  
 
            <React.Fragment>

            <div className="txt__seller txt--dark">
            <h1>SATICI</h1>
            </div>
            
            <div className="box_1">
                <div className="content">
                                <div className="content__img display__flex">
                                <span className="box__img">
                                <img src={require(`../../assets/images/heading/Image.png`)} alt=""/>
                                </span>
                        
                                <div className="texture"><div className="text_1"><h2>Öz Home</h2></div>

                                <Chips rating="542 rəy" store="340" />
                                </div>
                                
                                </div>
                
                    
                                        
                                        <div className="line display__flex">
                                                <img src={require('../../assets/images/heading/badge.svg')} alt=""/>
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
                                            <img src={require(`../../assets/images/heading/Union.svg`)} alt=""  />
                                            </div>
                                    
                                    </div>

                                    
                                    
                                    </div>
                
                
                </div>
            
            

       
        </React.Fragment>

    )
}

export default Seller;