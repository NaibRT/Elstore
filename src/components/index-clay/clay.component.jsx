import React from 'react';
import '../index-clay/clay.style.scss'
import { Link } from 'react-router-dom';

function Clay({item,linkText}){
    return(
        <React.Fragment>

        <div className="card">
        <div className="card-overlay">
          <div className="card-info">
          <img src={item.logo} alt=""/> 
            <h1 className='card-info-text'>{item.name}</h1>
            <p className="card-head">{item.description}</p>
            <div className="product display__flex">
            <p className='card-go'><Link style={{'textDecoration':'none','color':'white'}} to={`/company/${item.id}/${item.name}`} >{linkText}</Link></p>
            <img src={require(`../../assets/images/icons/Icon.svg`)} alt=""  />
            </div>
            
          </div>

        </div>
      </div>
        
        
        </React.Fragment>
    )
}

export default Clay;