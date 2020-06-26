import React, { useEffect,useState } from 'react';
import  '../Clay-map/clay.map.component'
import Clay from '../index-clay/clay.component';
import './clay-map.style.scss'
import UrlGenerator from '../../services/url-generator';

function ClayMap(){
      const [state, setstate] = useState([])
      useEffect(()=>{
        let url=UrlGenerator('az','stores');
        fetch(url)
        .then(async res=>{
          let data=await res.json();
          setstate(data.data)
          console.log(data)
        }).catch(err=>console.log(err))

      },[])
    return(
        <React.Fragment>
        <div className='row'>
    { state.map((x,i)=>(
      <div key = {i} className='col-lg-4 col-md-4 col-sm-6'>
        <Clay linkText='Məhsullara bax' item={x}/>
        </div>
    ))  
    }
    </div>
        </React.Fragment>
    );
     }
export default ClayMap;
