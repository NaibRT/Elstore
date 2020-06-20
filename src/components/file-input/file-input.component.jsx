import React from 'react'
import './file-input.scss'

function FileInput({onchange}) {
 return (
   <button className='file-upload-input' name='file' type='file'>
   <input  onChange={(e)=>{onchange(e)}} type='file'multiple/>
   </button>
 )
}

export default FileInput
