import React from 'react';
import Chips from '../chips/chips.component'
import './seller.scss';

function Seller(props){
    return(

         
  
 
            <React.Fragment>

            <div className="txt__seller txt--dark">
            <h1>SATICI</h1>
            </div>
            
            <div className="box">

                <span className="box__img display__flex">
                <img src={require(`../../assets/images/heading/Image.png`)} alt=""/>
               
               <h2>Oz home</h2>

                <Chips />
                
                </span>
                
                
                    
                                        
                                        <div className="line display__flex">

                                    <span className="rating__icon">
                                    <img src={require('../../assets/images/heading/badge.svg')} alt=""/>
                                    </span>
                                    
                                            <span className="line__right display__flex">
                                            <img src={require(`../../assets/images/heading/blackheart.svg`)} alt=""/>
                                            <h3>Elave et</h3>
                                            </span>
                                    
                                    </div>
                                    <div className="border__hr"></div> 


                                    <div className="bottom__line display__flex">

                                    <span className="contact">
                                    <h3>Elaqe</h3>
                                   <img src={require('../../assets/images/heading/Chevron.svg')} alt=""/> 
                                    </span>
                                    
                                            <span className="shop_click display__flex">
                                            <h3>Magazaya bax</h3>
                                            <img src={require(`../../assets/images/heading/Union.svg`)} alt=""/>
                                            
                                            </span>
                                    
                                    </div>

                                    
                                    
                
                
                
                </div>
            
            

       
        </React.Fragment>

    )
}

export default Seller;