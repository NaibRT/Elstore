import React,{useState,useEffect} from 'react'
import BasketCard from '../components/basket-card/basket_card.component'
import TotalSum from '../components/total_sum/tootal_sum.component'
import IconDeliverySafetyPayback from '../components/Icon-delivery-safety-payback/IconDeliverySafetyPayback.component'
import BtnPtimary from '../components/button-primary/button-primary.component'




function Basket() {
  
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

        basket.baskets.forEach(x=>{
            tax+=x.tax;
            totalPrice+=(x.price*x.count);
            totalDelivery+=x.deliveryPrice;

        })
        setBasket({
           ...basket,
           total:{
            amount:totalPrice,
            totalAmount:(totalPrice+totalDelivery+tax),
            totalDeliveryAmount:totalDelivery,
            taxamount:tax
           }
        })

    },[]);
    
    const [basket,setBasket]=useState({
      total:{
         amount:'',
         totalAmount:'',
         totalDeliveryAmount:'',
      },
      baskets:[
          {
              id:1,
              name:'blabla',
              deliveryPrice:5,
              price:10,
              tax:3,
              count:1,
              giftPacket:2
              
          }, 
          {
            id:2,
            name:'blkjbdabla',
            deliveryPrice:3,
            price:15,
            tax:2,
            count:1,
            giftPacket:5
        }
      ]
    });

    function minus(e){
        let totalPrice=0;
        let totalDelivery=0;
        let tax=0;
        var id=e.target.getAttribute('data-id');
        let currentBasket=basket.baskets.map(x=>{   
            if(x.id==id&& x.count>1){
                x.count--;
            }
            tax+=x.tax
            totalPrice+=(x.price*x.count);
            totalDelivery+=x.deliveryPrice;
            return x          
        });
        console.log(totalPrice)
         setBasket({
             ...basket,
             total:{
                 amount:totalPrice,
                 totalAmount:(totalPrice+totalDelivery+tax),
                 totalDeliveryAmount:totalDelivery,
                 taxamount:tax
             },
             baskets:currentBasket
         });
        }
    
        function plus(e){
            let totalPrice=0;
            let totalDelivery=0;
            let tax=0;
            var id=e.target.getAttribute('data-id');
            let currentBasket=basket.baskets.map(x=>{
                if(x.id==id){
                    x.count++;
                }
                tax+=x.tax
                totalPrice+=(x.price*x.count);
                totalDelivery+=x.deliveryPrice;
                return x
                
            });
            
             setBasket({
                 ...basket,
                 total:{
                     amount:totalPrice,
                     totalAmount:(totalPrice+totalDelivery+tax),
                     totalDeliveryAmount:totalDelivery,
                     taxamount:tax
                 },
                 baskets:currentBasket
             });
            }
    return (
        <section>
           <div className="container">
               <div className='row'>

                   <div className='col-lg-8 col-md-12 col-sm-12'>
                        <div>
                            {
                                basket.baskets.map((x)=>{
                                    return <BasketCard price={x.price} key={x.id} id={x.id} minus={minus} plus={plus} count={x.count}/>
                                })
                            }
                        </div>
                   </div>
                   <div className='col-lg-4 col-md-12 col-sm-12'>
                    
                         <div className="row">
                             <div className="col-lg-12 col-md-12 col-sm-12">
                           
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6 col-sm-12">
                                            <TotalSum amount="Məbləğ" delivery="Catdirilma" deliveryAmount={basket.total.totalDeliveryAmount} tax={basket.total.taxamount} total="Ümumi" totalPrice={basket.total.amount} totalCount={basket.total.totalAmount} />
                                        </div>
                                        <div className="col-lg-12 col-md-6 col-sm-12">
                                            <IconDeliverySafetyPayback />
                                        </div>
                                        <div className='col-lg-12 col-md-12 col-sm-12'>
                                        <BtnPtimary/>
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
