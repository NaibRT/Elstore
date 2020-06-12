import React from 'react'
import './badge.component.scss'

function Badge(props) {
 return (
  <div className={`badge border--big ${props.className}`}>
     <img alt='' src={props.icon}/>
     {props.name}
  </div>
 )
}

export default Badge
