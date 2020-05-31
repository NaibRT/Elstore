import React from "react";
import "./sifarish.scss"

const SifarishQiymeti = (props) => {
    return (
        
           
              
                <div className="BU COL4DUR">
                    <div className="text__qiymet display__flex ">
                        <h5>{props.price}</h5>
                        <div className="text--stock display__flex">
                            <img src={require(`../../assets/images/suggest.png`)} alt=""/>
                            <p>{props.stock}</p>
                        </div>
                    </div>
                    <div className="text--qiymetferqi">
                        <p>{props.priceabuot}</p>
                        <div className="bord"></div>
                    </div>
                    <div className="text--qeydler">
                         <h5> {props.sifarisqeydleri}</h5>
                        <div className="text--product__melumatlar">
                            <p>{props.sifarishmetni}</p>
                            <ul>
                                <li><span>-</span>{props.melumatlar}</li>
                                <li><span>-</span>{props.melumatlar}</li>
                                <li><span>-</span>{props.melumatlar}</li>
                                <li><span>-</span>{props.melumatlar}</li>
                            </ul>
                        </div>
                        
                    </div>
                    
                </div>
                
        
    )
}

export default SifarishQiymeti;

// ApplicationCache js de olan hissedi atdim bura istifade eliyersen
{/* <SifarishQiymeti price={"24 AZN"} stock={"mövcuddur"} priceabuot={"Başlanğıc qiymət ölçü, rəng, material və s. seçimlər əsasında dəyişə bilər."} sifarisqeydleri={"Sifariş qeydləri"} sifarishmetni={"Zəhmət olmasa sifarişinizdə aşağıdakıları bildirin:"} melumatlar={"Məhsulun növü"}></SifarishQiymeti> */}