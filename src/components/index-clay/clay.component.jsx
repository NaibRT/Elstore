import React from 'react';
import '../index-clay/clay.style.scss'

function Clay(){
    return(
        <React.Fragment>

        <div className="card">
        <div className="card-overlay">
        
          <div className="card-info">

          <img src={require('../../assets/images/index/Imagde.svg')} alt=""/> 

            <h1 className='card-info-text'>Clay Home</h1>
            <p className="card-head">Tamamilə əl işçiliyi olan məhsullar</p>
            <div className="product display__flex">
            <p className='card-go'>Məhsullara bax</p>
            <img src={require(`../../assets/images/icons/Icon.svg`)} alt=""  />
            </div>
            
          </div>

        </div>
      </div>
        
        
        </React.Fragment>
    )
}

export default Clay;