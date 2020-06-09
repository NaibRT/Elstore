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
                boxCategory.style.height="auto"
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
        let body=document.getElementsByTagName("body")[0];
        body.addEventListener("click",function(e){
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
       
    useEffect(() => {
       
    }, []);
       
    let SubCategories=[];
    console.log(CategoryContext.state.childrens.children)
    if(CategoryContext.state.childrens.children!==undefined){
        SubCategories=CategoryContext.state.childrens.children.map(x=>{
            console.log(x)
            return <ul key={x.id} className="">
            <li  className="box__subcotegory--item">
            <a className="box--subcotegory" href="/" >{x.translation.name}</a>
                <ul>
                 <li><a href="/">Jeans</a></li>
                </ul>
            </li>
           </ul>
        }) 
        console.log(SubCategories)                  
    }

    return (
                    <>
                    <div className="box__category" >
                        <ul>
                            {
                                CategoryContext.state.categories.map(x=>{
                                    return  <li  className="category__items" key={x.id} >{x.translation.name} <span ><img data-id={x.id} onMouseEnter={(e)=>{CategoryContext.event.getSubCat(e);handleClick()}}  className="icon"   src={require(`../../assets/images/slider/Icon.svg`)} alt=""/></span></li>
                                })
                            }
                            {/* <li>Ayaqqabılar <span><img className="icon"  onClick={handleClick} src={require(`../../assets/images/slider/Icon.svg`)} alt=""/></span></li>
                            <li>Geyim<span><img className="icon"  onClick={handleClick} src={require(`../../assets/images/slider/Icon.svg`)} alt=""/></span></li>
                            <li>Uşaq dünyası <span><img className="icon"  onClick={handleClick} src={require(`../../assets/images/slider/Icon.svg`)} alt=""/></span></li>
                            <li>Mebel <span><img className="icon"  onClick={handleClick} src={require(`../../assets/images/slider/Icon.svg`)} alt=""/></span></li>
                            <li>Ev və bağ təchizatı <span><img className="icon"  onClick={handleClick} src={require(`../../assets/images/slider/Icon.svg`)} alt=""/></span></li>
                            <li>İdman malları <span><img className="icon"  onClick={handleClick} src={require(`../../assets/images/slider/Icon.svg`)} alt=""/></span></li>
                            <li>Hədiyyələr <span><img className="icon"  onClick={handleClick} src={require(`../../assets/images/slider/Icon.svg`)} alt=""/></span></li> */}
                        </ul>
                    </div>
                    <div className="box--category" >
                <div className="box__subcotegory">
                    {SubCategories}
                </div>
            </div>
    </>
    )
}

export default Category;
