import React from 'react';
import './chips.style.scss';


function Chips(props){
    return(
        <React.Fragment>

            <span className="star">
                <img src={require('../../assets/images/heading/Stars.svg')} alt=""/>
                   </span>   
                          <span className="rating">{props.rating}</span>
                                <span className="right-line">
                                     <img src={require('../../assets/images/heading/Divider.svg')} alt=""/>
                                </span>
                          <span className="heart">
                   <img src={require('../../assets/images/heading/heart1.svg')} alt=""/>
                </span>    
           <span className="store">{props.store}</span>

        </React.Fragment>
    )
}



export default Chips;
