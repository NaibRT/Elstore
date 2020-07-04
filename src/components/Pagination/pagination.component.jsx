import React,{useState,useEffect} from 'react'
import "./pagination.scss"


function Pagination({meta,paginationHandling}){
   
const pageItems=[]


for(let i=0;i<meta.last_page;i++){
    pageItems.push(i)
}
    return (
        <div className="pagenation">
            <ul>
                {
                   pageItems.map((x,i)=>{
                     return <li className="focustext " tabindex="1"    key={i} onClick={paginationHandling}>{x+1}</li>
                   })
                }
            </ul>
        </div>
    )
}

export default Pagination;