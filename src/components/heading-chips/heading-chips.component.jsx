import React from 'react';
import Chips from '../chips/chips.component'
import './heading-chips.style.scss';

function Heading(props){
    return(         
             <React.Fragment>                                  
            <div className="text__main display__flex">
            <h4>{props.heading}</h4>
            </div>

            <div className="text__main--sub">
            <p>{props.subtitle}</p>
            </div>

                <div className="info">
                <span className="text__main--sub2 txt--secondary"> 
                {props.sale}</span>

                <span className="divider"><img src={require('../../assets/images/heading/Divider.svg')} alt=""/></span>

                <Chips rating="542 rəy" store="340" />
                </div>
                

            <div className="rating__trend display__flex">
            
            <span className="rating__trend__highrating">
            <img src={require('../../assets/images/heading/badge.svg')} alt=""/>
            </span>

            <span className="rating__trend__trend">
            <img src={require('../../assets/images/heading/trend.svg')} alt=""/>
            </span>
            </div>

       </React.Fragment>
    )
}

export default Heading;

