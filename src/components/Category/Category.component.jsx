import React, {useEffect,useState,useContext} from 'react'
import "../Category/Category.scss"
import { categoryContext } from "../../contexts/category";
const Category = () => {
    const CategoryContext = useContext(categoryContext)

  
    
    function handleClick() {
        let boxCategory=document.querySelector(".box--category");
        let box__subcotegoryItem=document.querySelectorAll(".box__subcotegory--item");
          
               box__subcotegoryItem.forEach(x=>{
                    x.style.display="block";
                    x.style.transition="0.5s ease";
                })
                boxCategory.style.transition="0.5s ease";
                boxCategory.style.width="550px";
       }


        function CategoryLeave(){
            let boxCategory=document.querySelector(".box--category");
        let box__subcotegoryItem=document.querySelectorAll(".box__subcotegory--item");

               box__subcotegoryItem.forEach(x=>{
                    x.style.display="none";
                    x.style.transition="0.5s ease";
                })
                boxCategory.style.width="0px";
        }
        // let body=document.getElementsByTagName("body")[0];
        // body.addEventListener("click",function(e){
        //     let boxCategory=document.querySelector(".box--category");
        //     let box__subcotegoryItem=document.querySelectorAll(".box__subcotegory--item");
        //     if(e.path[5]!=boxCategory ){
        //         box__subcotegoryItem.forEach(x=>{
        //             x.style.display="none";
        //             x.style.transition="0.5s ease";
        //         })
        //         boxCategory.style.width="0px";
        //     } 
        // })
       
    useEffect(() => {
       
    }, []);
       
    let SubCategories=[];
    if(CategoryContext.state.childrens.children!==undefined){
        SubCategories=CategoryContext.state.childrens.children.map(x=>{
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
                                    return  <li onMouseOver={(e)=>{CategoryContext.event.getSubCat(e);handleClick()}}  className="category__items" key={x.id} >{x.translation.name} <span ><img data-id={x.id} className="icon"   src={require(`../../assets/images/slider/Icon.svg`)} alt=""/></span></li>
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
