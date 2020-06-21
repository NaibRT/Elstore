import React from 'react'
import HeartImage from '../heart-image/heartImage.component'
import ButtonRating from '../button-rating/buttonRating.component'
import {Link} from 'react-router-dom'
import './product-card-item.component.scss'

function ProductCartItem({data}) {
 return (
  <div  className="search__result">
  <HeartImage isLiked={data.is_like} id={data.id}/>
  {
      data.images.map(f=>{
          if(f.is_main){
              return <div key={f.id} className="swiper_slide_image">
                  <img src={f.product_thumbnail_image} alt=""/>
              </div> 
          }

      })
  }
  <h5>
  <Link to={`/product/${data.id}/${data.product_name}`}>{data.product_name}</Link>
  </h5>
  <p>{data.price} AZN</p>
  <ButtonRating name='Yuksek rating' class='bg-gold' icon={require('../../assets/images/icons/star.svg')}/>
</div>
 )
}

export default ProductCartItem
