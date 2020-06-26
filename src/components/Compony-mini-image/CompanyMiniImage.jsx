import React from 'react'
import './CompanyMiniImage.scss'
import ButtonDropDown from '../button-dropdown/ButtonDropDown.component';



function CompanyMiniImage({changeHandler,thum_img,edit}) {

    return (
        <>
        <div className="left_side__image__content button_drop__down">
            <img src={thum_img} alt=""/>
            {
                edit
                ?<ButtonDropDown onchange={(e)=>{changeHandler(e)}}/>
                :null
            }
        </div>
        </>
    )
}

export default CompanyMiniImage
