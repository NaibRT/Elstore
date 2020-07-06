import React,{useEffect,useState} from 'react'
import Datatable from '../components/datatable/datatable';
import '../App.scss'
import axios from 'axios'
import '../assets/sass/pages/compaign.scss'
import Button from '../components/button/button.component';
import UrlGenerator from '../services/url-generator';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import {appContext} from '../contexts/appContext';


const th = ['Adı', 'Qiymət','Endirim','Status','Düzəlİş' ];

var sifaris = [
  {
    'ad':'Nümunə məhsul adı məhsul adı məhsul adı',
    'Kateqorİya':'ketegor',
    'qiymet': '12azn',
    'status': 'Aktiv',
    'duzelish': 'Aktiv',
  }
  
]

function Products({headerText,match}) {
const [product,setProduct] = useState({
  data:[],
  category:[]
})
const AppContext=useContext(appContext);

let producturl = UrlGenerator('az','products?include=seller');
let categoryUrl = UrlGenerator('az','categories');


useEffect(()=>{
  let token=AppContext.events.getToken();
  let id=match.params.id;
let url=''
id!==undefined?
    url=UrlGenerator('az',`users/company?company_id=${id}&include=products`)
    :url=UrlGenerator('az',`users/company?include=products`)
      fetch(url,{
          headers:{
              'Authorization':token!==null?`${token.token_type} ${token.access_token}`:''
          } 
                })
                .then(async res => {
                    let data =await res.json();
                    console.log(data)
                    if(res.ok){
                     setProduct({
                       ...product,
                       data:[...data.data[0].products]
                     })
                    }
 
                }).catch(err=>console.log(err))
      },[])

const deleteProduct=(e)=>{
  let id =e.target.getAttribute('data-id');
  const newProducts=product.data.filter(x=>x.id!=id);
  console.log(newProducts)
  let url=UrlGenerator('az',`products/${id}`);
  let token=AppContext.app.token;
  console.log(token)
  fetch(url,{
      method:'Delete',
      headers:{
          'Authorization':token!=null?`${token.token_type} ${token.access_token}`:''
      }
  }).then(async res=>{
      let data=await res.json();
      if(res.ok){
        setProduct({
          ...product,
          data:[...newProducts]
        })
      }
  }).catch(err=>console.log(err))
}


function handleSelect(e) {
  let url=UrlGenerator('az',`search/product?filter[category_id]=${e.target.value}`)
  axios.get(url)
  .then(res => {
      setProduct({data:res.data.data});
  })
}
function searchName(e){
  let url=UrlGenerator('az',`search/product?filter[product_name]=${e.target.value}`)
  axios.get(url)
  .then(res => {
      setProduct({data:res.data.data});
  })
}

    return (
        <div className='container-fluid'>
            <div className="head_compaign">
                <h1>Toplam Mehsul Sayi: {product.data.length}</h1>
                <div className='compaign_buttons'>
                    <Link className='compaignbtn active' to='/profile/product/create'><span>+ Məhsul Əlavə Et</span></Link>
                    <div>&nbsp;&nbsp;</div>
                </div>
            </div>
            <br/>
            <Datatable deleteProduct={deleteProduct} searchName={searchName} handleSelect={handleSelect}   thead ={th} tbody={product.data}/>
        </div>
    )
}

export default Products
