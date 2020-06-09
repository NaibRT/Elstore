import React from 'react'

import './buttonRating.component.scss'

function ButtonRating() {
    return (
        <div className="button_rating_content">
            <button className="button_rating">
                <img src={require('../../assets/images/icons/star.svg')} alt=""/>
                Yüksək reytinq
            </button>
        </div>
    )
}

export default ButtonRating
