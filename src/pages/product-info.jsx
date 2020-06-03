import React from 'react'
import ProductSlider from '../components/product-slider/slider.component'
import AboutProduct from '../components/About-product/About-product.component'
import DeliveryInfo from '../components/Deliver-info/Deliver-info.component'
import HeadingChips from '../components/heading-chips/heading-chips.component'
import OrderPrize from '../components/sifarish_qiymeti/sifarish.component'
import Input from '../components/input/input.component'
import Buttons from '../components/buttons/buttons.component'
import Delivery from '../components/Icon-delivery-safety-payback/IconDeliverySafetyPayback.component'
import Seller from '../components/seller/seller.component'

function ProductInfo() {
 return (
  <section>
    <div className="container">
        <div className='row'>
         <div className='col-lg-8 col-md-12 col-sm-12'>
           <ProductSlider/>
           <AboutProduct/>
           <DeliveryInfo/>
         </div>
         <div className='col-lg-4 col-md-12 col-sm-12'>
             <HeadingChips heading="Əl işləri" subtitle="Öz home / Ev aksessuarları / Toxuma işləri" sale="214 dəfə satıldı" rating="(542)" store="340"/>
             <OrderPrize price='24 AZN' priceabuot='Başlanğıc qiymət ölçü, rəng, material və s. seçimləri əsasında dəyişə bilər.' sifarisqeydleri='SİFARİŞ QEYDLƏRİ'/>
             <Input/>
             <Buttons/>
             <Delivery/>
             <Seller/>
         </div>
        </div>
    </div>
  </section>
 )
}

export default ProductInfo