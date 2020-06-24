import React,{useEffect,useState} from 'react'
import Datatable from '../components/datatable/datatable';
import '../App.scss'
import axios from 'axios'
import '../assets/sass/pages/compaign.scss'
import Button from '../components/button/button.component';
import UrlGenerator from '../services/url-generator';
import {Link} from 'react-router-dom'


const th = ['Adı','Kateqorİya', 'say', 'qİymət','Status','Düzəlİş' ];

var sifaris = [
  {
    'ad':'Nümunə məhsul adı məhsul adı məhsul adı',
    'Kateqorİya':'ketegor',
    'say': '1',
    'qiymet': '12azn',
    'status': 'Aktiv',
    'duzelish': 'Aktiv',
  }
  
]

function Products() {
const [product,setProduct] = useState({
  data:[],
  category:[]
})

let producturl = UrlGenerator('az','products?include=seller');
let categoryUrl = UrlGenerator('az','categories');


useEffect(()=>{
  axios.get(producturl,{headers:{
  }})
  .then(res=>{
      // setProduct(res.data.data)
      setProduct({data:res.data.data});
  })



  
},[])

    return (
        <div className='container-fluid'>
            <div className="head_compaign">
                <h1>Toplam məhsul sayı: {product.data.length}</h1>
                <div className='compaign_buttons'>
                    <Link className='compaignbtn active' to='/profile/product/create'><span>+ Məhsul Əlavə Et</span></Link>
                    <div>&nbsp;&nbsp;</div>
                    <Button className='compaignbtn' name='yadda saxla'/>
                </div>
            </div>
            <br/>
            <Datatable   thead ={th} tbody={product.data}/>
        </div>
    )
}

export default Products
