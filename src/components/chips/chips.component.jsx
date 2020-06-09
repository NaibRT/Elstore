import React from 'react';
import './chips.style.scss';


function Chips(props){
    return(
        <React.Fragment>
        <div className="star__chips display__flex">

                        <div className="star__text display__flex"> 
                            <img src={require('../../assets/images/heading/Stars.svg')} alt=""/> 
                            <h2>{props.rating}</h2>

                            <span className="right-line">
                            <img src={require('../../assets/images/heading/Divider.svg')} alt=""/>
                            </span>
                        </div>
                      
                                         

                                             <div className="heart__text display__flex">
                                             
                                                <img src={require('../../assets/images/heading/Union.svg')} alt=""/>                                          
                                                <h2>{props.store}</h2>
                                            </div>

        </div>
        </React.Fragment>
    )
}



export default Chips;
