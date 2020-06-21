import React,{useState,useEffect, useContext} from 'react'
import BasketCard from '../components/basket-card/basket_card.component'
import TotalSum from '../components/total_sum/tootal_sum.component'
import IconDeliverySafetyPayback from '../components/Icon-delivery-safety-payback/IconDeliverySafetyPayback.component'
import Button from '../components/button/button.component';
import {appContext} from '../contexts/appContext';
import { Link } from 'react-router-dom';



function Basket() {
     let AppContext=useContext(appContext);
    useEffect(() => {
        let totalPrice=0;
        let totalDelivery=0;
        let tax=0;
        var acc = document.getElementsByClassName("accordion");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.height) {
              panel.style.height = null;
            } else {
              panel.style.height = panel.scrollHeight + "px";
            } 
          });
        };

        AppContext.basket.forEach(x=>{
            totalPrice+=(x.price*x.count);
            totalDelivery+=x.deliveryPrice;
        })
        AppContext.events.setTotal({
           ...AppContext.total,
            amount:totalPrice,
            totalAmount:'',
            totalDeliveryAmount:'',
            taxamount:''
        })

    },[]);
    
    const [mybasket,mysetBasket]=useState({
      total:{
         amount:'',
         totalAmount:'',
         totalDeliveryAmount:'',
      }
    });


    

            console.log(AppContext.basket)
    return (
        <section>
           <div className="container-fluid">
               <div className='row'>

                   <div className='col-lg-8 col-md-12 col-sm-12'>
                        <div>
                            {
                                AppContext.basket.map((x)=>{
                                    return <BasketCard product={x} key={x.id} id={x.id} minus={AppContext.events.minus} plus={AppContext.events.plus}/>
                                })
                            }
                        </div>
                   </div>
                   <div className='col-lg-4 col-md-12 col-sm-12'>
                    
                         <div className="row">
                             <div className="col-lg-12 col-md-12 col-sm-12">
                           
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6 col-sm-12">
                                            <TotalSum amount="Məbləğ" delivery="Catdirilma" deliveryAmount={AppContext.total.totalDeliveryAmount} tax={AppContext.total.taxamount} total="Ümumi" totalPrice={AppContext.total.amount} totalCount={AppContext.total.totalAmount} />
                                        </div>
                                        <div className="col-lg-12 col-md-6 col-sm-12">
                                            <IconDeliverySafetyPayback />
                                        </div>
                                        <div className='col-lg-12 col-md-12 col-sm-12'>
                                        <Button className='bg-primary--light'><Link to='/checkout'>Sifaris ver</Link></Button>
                                    </div>
                                    </div>
                             <div className="col-lg-12 col-md-6 col-sm-12">
                                 
                             </div>
                         </div>
                         </div>
                    </div>
               </div>
               </div> 
        </section>
    )
}

export default Basket
