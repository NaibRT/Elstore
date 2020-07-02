import React,{useState,useEffect} from 'react'
import UrlGenerator from "../../services/url-generator"


function Pagination({meta,paginationHandling}){
    
    

  


   

const pageItems=[]

for(let i=0;i<meta.last_page;i++){
    pageItems.push(i)
}
    return (
        <div>
            <ul>
                {
                   pageItems.map((x,i)=>{
                     return <li key={i} onClick={paginationHandling}>{x}</li>
                   })
                }
            </ul>
        </div>
    )
}

export default Pagination;
