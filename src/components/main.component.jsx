import React from 'react';

import './main.component.scss';



import AboutProduct from './About-product/About-product.component';
import DeliverInfo from './Deliver-info/Deliver-info.component';

function Main(){
    return(
        <section className="main_section">
            <div className="main_container">
                <div className="main_row">
                    <div className="main_left_column">
                        <AboutProduct/>
                        <DeliverInfo/>
                    </div>
                    <div className="main_right_column">
                        <h1>right</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;