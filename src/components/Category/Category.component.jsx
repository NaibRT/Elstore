import React, {useEffect,useState,useContext} from 'react'
import "../Category/Category.scss"
import { categoryContext } from "../../contexts/category";
const Category = () => {
    const CategoryContext = useContext(categoryContext)

  
    
    function handleClick() {
        let boxCategory=document.querySelector(".box--category");
        let box__subcotegoryItem=document.querySelectorAll(".box__subcotegory--item");
          
        console.log(CategoryContext.state.childrens.children);
        
        setTimeout(() => {
            box__subcotegoryItem.forEach(x=>{
                x.style.display="block";
                x.style.transition="0.5s ease";
            })
        }, 1200);
        
        setTimeout(() => {
           
            boxCategory.style.transition="0.2s ease";
            boxCategory.style.width="550px";
        }, 200);
               
       }

      


        function CategoryLeave(){

            setTimeout(() => {
                let boxCategory=document.querySelector(".box--category");
                let box__subcotegoryItem=document.querySelectorAll(".box__subcotegory--item");
        
                       box__subcotegoryItem.forEach(x=>{
                            x.style.display="none";
                            x.style.transition="0.3s ease";
                        })
                        boxCategory.style.width="0px";
            }, 1000);
           
        }
        
       
       
    useEffect(() => {
        
   
        
        let body=document.querySelector(".box__category");
        setTimeout(() => {
            body.addEventListener("mouseleave",function(e){
                let boxCategory=document.querySelector(".box--category");
                let box__subcotegoryItem=document.querySelectorAll(".box__subcotegory--item");
                if(e.path[5]!=boxCategory ){
                    box__subcotegoryItem.forEach(x=>{
                        x.style.display="none";
                        x.style.transition="0.5s ease";
                    })
                    boxCategory.style.width="0px";
                } 
            })
        }, 500);
    }, []);
       

    
    let SubCategories=[];
    console.log(CategoryContext.state.childrens.children)
    if(CategoryContext.state.childrens.children!==undefined){
        SubCategories=CategoryContext.state.childrens.children.map(x=>{
            console.log(x)
            return <ul key={x.id} className="">
            <li  className="box__subcotegory--item">
            <a data-id={x.id} className="box--subcotegory" href="/" >{x.translation.name}</a>
                <ul>
                {(x.children != null) ? x.children.map(y=>{return <li data-id=""><a href="/">{y.translation.name}</a></li>}): ''}
                </ul>
            </li>
           </ul>
        })                 
    }

    return (
                    <>
                    <div className="box__category" >
                        <ul>
                            {
                                CategoryContext.state.categories.map(x=>{
                                    return  <li   className="category__items" key={x.id} >{x.translation.name} <span ><img onMouseOver={(e)=>{CategoryContext.event.getSubCat(e);handleClick()}} data-id={x.id} className="icon"   src={require(`../../assets/images/slider/Icon.svg`)} alt=""/></span></li>
                                })
                            }
                        </ul>
                        <div className="box--category" onMouseLeave={CategoryLeave} >
                        <div className="box__subcotegory">
                            {SubCategories}
                        </div>
                    </div>
                    </div>
    </>
    )
}

export default Category;
