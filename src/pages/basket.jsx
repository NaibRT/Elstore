import React,{useState,useEffect} from 'react'
import BasketCard from '../components/basket-card/basket_card.component'
import Total_Sum from '../components/total_sum/tootal_sum.component'
import IconDeliverySafetyPayback from '../components/Icon-delivery-safety-payback/IconDeliverySafetyPayback.component'




function Basket() {
    useEffect(() => {
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
        }
    });
    
    const [basket,setBasket]=useState({
      total:{
         amount:'',
         totalAmount:''
      },
      baskets:[
          {
              id:1,
              name:'blabla',
              price:10,
              count:1
          }, 
          {
            id:2,
            name:'blkjbdabla',
            price:15,
            count:1
        }
      ]
    });

    function minus(e){
        let totalPrice=0;
        var id=e.target.getAttribute('data-id');
        let currentBasket=basket.baskets.map(x=>{   
            if(x.id==id&& x.count>1){
                x.count--;
            }
            totalPrice+=x.price*x.count;
            return x          
        });
        console.log(totalPrice)
         setBasket({
             ...basket,
             total:{
                 ...basket.total,
                 totalAmount:totalPrice
             },
             baskets:currentBasket
         });
        }
    
        function plus(e){
            let totalPrice=0;
            var id=e.target.getAttribute('data-id');
            let currentBasket=basket.baskets.map(x=>{
                if(x.id==id){
                    x.count++;
                }
             
                totalPrice+=x.price*x.count;
                console.log(totalPrice)
                debugger
                return x
                
            });
            
            console.log(totalPrice)
             setBasket({
                 ...basket,
                 total:{
                     ...basket.total,
                     totalAmount:totalPrice
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
                                    return <BasketCard key={x.id} id={x.id} minus={minus} plus={plus} count={x.count}/>
                                })
                            }
                        </div>
                   </div>
                   <div className='col-lg-4 col-md-12 col-sm-12'>
                    
                         <div className="row">
                             <div className="col-lg-12 col-md-12 col-sm-12">
                           
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6 col-sm-12">
                                            <Total_Sum amount="Məbləğ" count={basket.baskets.length} delivery="catdirilma" deliveryamount='' total="Ümumi" totalcount={basket.total.totalAmount} />
                                        </div>
                                        <div className="col-lg-12 col-md-6 col-sm-12">
                                            <IconDeliverySafetyPayback />
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
