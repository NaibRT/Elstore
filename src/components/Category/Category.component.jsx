import React, {useEffect,useState,} from 'react'
import "../Category/Category.scss"

const Category = () => {

    const [categories,setCategories]=useState([
        {id:1,name:'Men',
         subCat:[
            {id:1,name:'Men TShirt',
            childre:[
                {id:1,name:'Men TShirt xl'},
                {id:2,name:'Men Jacket lg'}
             ],
        },
            {id:2,name:'Men Jacket',
            childre:[
                {id:1,name:'Men TShirt xl'},
                {id:2,name:'Men Jacket lg'}
             ],
        }
         ]
        },
        {id:2,name:'Women',
          subCat:[
            {id:1,name:'Women TShirt',
            childre:[
                {id:1,name:'Men TShirt xl'},
                {id:2,name:'Men Jacket lg'}
             ],
          },
            {id:2,name:'Women Jacket'}
         ]},
        {id:3,name:'Kid',
        subCat:[
            {id:1,name:'Kid TShirt'},
            {id:2,name:'Kid Jacket'}
         ]}
    ]);
    const [subCat,setSubCat]=useState({});


    
    function handleClick(e) {
        
        let subCats=[];
        let id=e.target.getAttribute('data-id');
        console.log(id)
        categories.forEach(x=>{
            if(x.id==id){
                subCats= x.subCat
            }});

        setSubCat({subCats});
        let boxCategory=document.querySelector(".box--category");
        let box__subcotegoryItem=document.querySelectorAll(".box__subcotegory--item");
          
               
               box__subcotegoryItem.forEach(x=>{
                    x.style.display="block";
                    x.style.transition="0.5s ease";
                })
                boxCategory.style.transition="0.5s ease";
                boxCategory.style.width="550px";


        console.table(subCat)
        
       }
       function CategoryEventHandler() {
        
            
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
       
    let SubCategories='';
    if(subCat.subCats!==undefined){
        SubCategories=subCat.subCats.map(x=>{
            return <ul key={x.id} className="">
            <li  className="box__subcotegory--item">
            <a className="box--subcotegory" href="/" >{x.name}</a>
                <ul>
                {x.childre.map(y=>{
                    return <li><a href="/">{y.name}</a></li>
                })}
                </ul>
            </li>
           </ul>
        })                   
    }


    return (
                <div className="col-lg-4 col-md-12  ">
                    <div className="box__category" >
                        <ul>
                            {
                                categories.map(x=>{
                                    return  <li  className="category__items" key={x.id} >{x.name} <span ><img data-id={x.id} onMouseEnter={(e)=>{handleClick(e);}} onClick={()=>{CategoryEventHandler();}} className="icon"   src={require(`../../assets/images/slider/Icon.svg`)} alt=""/></span></li>

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
                    <div className="box--category" onMouseLeave={()=>{CategoryLeave()}}>
                <div className="box__subcotegory">
                    {SubCategories}
                </div>
            </div>
                </div>
            

        
    )
}

export default Category;
