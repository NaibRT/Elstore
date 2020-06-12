import React,{useEffect,useState} from 'react'
import '../assets/sass/pages/product-info.scss'
import ProductSlider from '../components/product-slider/slider.component'
import AboutProduct from '../components/About-product/About-product.component'
import DeliveryInfo from '../components/Deliver-info/Deliver-info.component'
import HeadingChips from '../components/heading-chips/heading-chips.component'
import OrderPrize from '../components/sifarish_qiymeti/sifarish.component'
import Input from '../components/input/input.component'

import Button from '../components/button/button.component'
import ButtonGroup from '../components/button-group/button-group.component'
import Delivery from '../components/Icon-delivery-safety-payback/IconDeliverySafetyPayback.component'
import Seller from '../components/seller/seller.component'
import UrlGenerator from '../services/url-generator'

function ProductInfo(props) {
  const [product,setProduct]=useState({
    images:[],
  });
  useEffect(()=>{
    let url=UrlGenerator('az','products');
      fetch(`${url}/${props.match.params.id}`,{
        method:'Get',
      })
      .then(res =>{
        res.json()
        .then(r=>{
          setProduct(r.data[0]);
          // console.log(r.data[0])
        })
        .catch(e=>console.log(e))
      })
      .catch(err=>console.log(err))
  },[])
  console.log(product.images) 
 return (
  <section>
    <div className="slider_container container">
        <div className='row'>
         <div className='col-lg-8 col-md-12 col-sm-12'>
           <ProductSlider images={product.images} />
          <div className='slider_container_padding mobile-container'>
            <AboutProduct about={product.product_description}/>
            <DeliveryInfo/>
          </div>
         </div>
  
        <div className='col-lg-4 col-md-12 col-sm-12 '>
             <HeadingChips  heading={product.product_name} subtitle="Öz home / Ev aksessuarları / Toxuma işlər" sale="212 dəfə satıldı" />
             <OrderPrize price={`${product.price} AZN`} stock="movcuddur" priceabuot='Başlanğıc qiymət ölçü, rəng, material və s. seçimləri əsasında dəyişə bilər.' sifarisqeydleri='SİFARİŞ QEYDLƏRİ'/>
             <Input/>
             <Button className="bg-primary txt--dark" name='Sebete Elave ET'/>
             <ButtonGroup>
             <Button className="btn-buy-now txt--light" name='Indi Al'/>
             </ButtonGroup>         
             <Delivery/>
             <Seller/>
         </div>
        </div>
        </div>
    
  </section>
 )
}

export default ProductInfo
