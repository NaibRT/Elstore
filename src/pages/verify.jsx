import React,{useEffect} from 'react'
import UrlGenerator from '../services/url-generator.js'

function Verify(props) {
 useEffect(()=>{
   let url=UrlGenerator('az',`auth/verify/${props.match.params.token}`);
   fetch(url)
   .then(respons=>{
    respons.json()
    .then(r=>{console.log(r)})
    .catch(err=>{console.log(err)})
   })
   .catch(error=>{console.log(error)})
 },[])
 return (
  <div>
      <h1>Verifyed</h1>
  </div>
 )
}

export default Verify
