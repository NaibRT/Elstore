import React from 'react'
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import {Link} from "react-router-dom"
import "../CheckPrint/CheckPrint.scss"
import Button from "../button/button.component"
 
 
 
class ComponentToPrint extends React.Component {
  render() {
    return (
        <div className="container">
        <div className="row">
             <div className="col-lg-12 col-md-12 col-xs-12">
               <div className="check__order">
                     <div className="redirect__page1">
                         <Link className="rediretc__text" to="/">əsas səhifə</Link>
                         <span><img src={require(`../../assets/images/icons/Icon_right.svg`)} alt=""/></span>
                         <Link className="rediretc__text" to="/">sifariş</Link>
                     </div>
                     <div className="orderss">
                         <h5>Sifariş</h5>
                     </div>
                     <div className="order__info">
                         <p>Təşəkkür edirik. Sifarişiniz uğurla tamamlandı. Sizinlə tezliklə əlaqə saxlanılacaq.</p>
                     </div>
                     <div className="orders__code">
                         <p>Kod: ID12345678</p>
                     </div>
                         <div className="orders_details">
                             <p>Sifarişin detalları</p>
                         </div>
                         <div className="main__orders">
                             <div className="table__info">
                                 <h3>Məhsul</h3>
                                 <h3>Adı</h3>
                                 <h3>Sayı</h3>
                                 <h3>Qiymət</h3>
                             </div>
                             <div className="order">
                                 <div className="product_-image">
                                     <img src={require(`../../assets/images/Rectangle.jpg`)} alt=""/>
                                 </div>
                                 <h3>Əl işi müxtəlif toxumalar</h3>
                                 <h3>1</h3>
                                 <h3>50 ₼</h3>
                             </div>
                         </div>
                         <div className="client_info">

                             <div className="personal__info">
                                 <h4>Müştəri məlumatları</h4>
                                 <ul>
                                     <li>Əliyev Əhməd Azər</li>
                                     <li>050 258 88 77</li>
                                     <li>Bakı ş., Səbail ray.Üzeyir Hacıbəyov küç. 30</li>
                                 </ul>
                             </div>
                             <div className="personal__info">
                                 <h4>Tarix</h4>
                                 <ul>
                                     <li>01-08-2020 </li>
                                 </ul>
                             </div>
                             <div className="personal__info">
                                 <h4>Cəm</h4>
                                 <ul>
                                     <li>50 ₼</li>
                                 </ul>
                             </div>
                             <div className="personal__info">
                                 <h4>Ödəniş üsulu</h4>
                                 <ul>
                                     <li>Nağd ödəniş</li>
                                 </ul>
                             </div>
                         </div>
                      
               </div>
             </div>
        </div>
     </div>
    );
  }
}
 
class CheckPrint extends React.Component {
  render() {
    return (
      <div>
            <ComponentToPrint ref={el => (this.componentRef = el)} />
        <ReactToPrint
          trigger={() => {
            return   <div className="pdf_top">
            <Button className="pdf__check" name="SiFARiŞi ÇAP ET"/>
           </div>;
          }}
          content={() => this.componentRef}
        />
      
      </div>
    );
  }
}
export default CheckPrint;
  
  
  
