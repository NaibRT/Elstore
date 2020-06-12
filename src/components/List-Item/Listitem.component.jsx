import React, { useEffect } from 'react'
import "../List-Item/Listitem.scss"






const Listitem = (props) => {
    return (
        <ul className="listitme-ul">
            <li className="listitme-li">{props.name}</li>
        </ul>
    )
}

export default Listitem;
