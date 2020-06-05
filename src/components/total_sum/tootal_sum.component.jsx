import React from 'react'
import "../total_sum/total_sum.scss"
const Total_Sum = (props) => {
    return (
     
                
                <div className="collgdord colmdalti colxsoniki ">
                    <div className="text--total-sum">
                        <div className="text--amount">
                            <div className="text__amount--count  display__flex">
                                <h5>{props.amount}</h5>
                                <p>{props.totalPrice}</p>
                            </div>
                            <div className="bord"></div>
                        </div>
                        <div className="text--delivery " >
                            <div className="text__delivery--count display__flex">
                            <h5>{props.delivery}</h5>
                              <p>{props.deliveryAmount}</p>   
                            </div>
                            <p>Çatdırılma ünvanına əsasən hesablanacaq.</p>
                            <div className="bord"></div>
                        </div>
                        <div className="text__total-sum display__flex">
                            <h5>{props.total}</h5>
                            <p>{props.totalCount}</p>
                        </div>
                    </div>
                    
                </div>
            
    )
}

export default Total_Sum;
