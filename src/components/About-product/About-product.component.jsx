import React from 'react';

import './About-product.component.scss';

import Db from '../../contexts/db.json';

const data = Db.aboutProduct;

function AboutProduct(){

    function showButton(){
       let aboutProductContent = document.getElementById('aboutContent');
       let showMore = document.getElementById('showMore');
       aboutProductContent.style.height = "100%";
       aboutProductContent.style.overflow = "auto";
       showMore.style.display = "none";

    }

    return(
        <section className="about__product__section">
            {
                data.map(s => 
                    (
                    <div key={s.id}>
                        <div className="about__product__title">
                            <h4>{s.title}</h4>
                        </div>
                        <div id="aboutContent" className="about__product__content">
                            <p>
                            Material:
                            cotton thread, wooden dowel, cotton yarn, loom.
                            This beautiful made to order bohemian style woven wall hanging is a 
                            lovely way to add some warmth and texture to your walls. Cozy textured neutrals, 
                            contrasted with a rich golden yellow and blush pink. Each wall hanging is hand made using
                            a range of carefully selected cotton and acrylic yarn, thread and roving. Each wall hanging is 
                            hand made using a range of carefully selected cotton and acrylic yarn, 
                            </p>
                        </div>
                        <button id="showMore" onClick={showButton}>Davamını oxu</button>
                    </div>
                ))
            }
        </section>
    )
}

export default AboutProduct;