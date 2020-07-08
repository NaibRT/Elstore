import React from 'react'

function Label({name,className}) {
 return (
  <div className={`label-component ${className}`}>
   {name}
  </div>
 )
}

export default Label
