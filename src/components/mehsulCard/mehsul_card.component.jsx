import React, {useEffect, useState } from 'react';
import  '../../App.scss';
import './mehsul_card.component.scss';
import {Link} from 'react-router-dom';
import UrlGenerator from '../../services/url-generator';


function MehsulCard(){
  const data=[1,2,3]
  const [state, setstate] = useState([])
  useEffect(()=>{
    let url=UrlGenerator('az','stores');
    fetch(url)
    .then(async res=>{
      let data=await res.json();
      console.log(data)
      setstate(data.data)
      console.log(data)
    }).catch(err=>console.log(err))
  
  },[])
        return (
            <div >
              <div className="row">
                <div className="col-lg-12">
                      <div className="discount_title display__flex">
                          <h5>Endirimler</h5>
                          <Link to='/campaigns'>Daha çox</Link>
                      </div>
                </div>
              </div>
                <div className='row'>
                {
                    state.map((x,i)=>{
                        return(
                            <div key={i} className='col-lg-6 col-md-12 '>
                            
                        <div className="e-card">
                        <img className="bg-card-img" alt='' src={x.cover_image}/>
                            <div className="e-card-overlay">
                                <p className="e-card-head">{x.name}</p>
                                <div className="e-card-info">
                                    <img className="e-card-info-name" src={x.logo} />
                                    <p className='e-card-info-text'>{x.name}</p>
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
