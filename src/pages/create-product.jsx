import React,{useEffect,useState, useContext} from 'react'
import Card from '../components/card/card.component'
import GoBack from '../components/go-back/go-back.component'
import InputGroup from '../components/InputGroup/InputGroup.component'
import SelectBox from '../components/Select-box/SelectBox.component'
import JoditEditor from 'jodit-react'
import FileInput from '../components/file-input/file-input.component'
import UrlGenerator from '../services/url-generator'
import { appContext } from '../contexts/appContext'
import Image from '../components/file-input/image'
import CompanyMiniImage from '../components/Compony-mini-image/CompanyMiniImage'
import Button from '../components/button/button.component'
import Tab from '../components/tab/tab-component'

const product={
  product_category_id:'',
  product_price:'',
  status:1,
  product_brand_id:'',
  az:{
    product_description:'',
    product_name:''
  },
  en:{
    product_description:'',
    product_name:''
  },
  ru:{
    product_description:'',
    product_name:''
  },

 }
function CreateProduct(){

 const AppContext=useContext(appContext)
 const [categories,setCategories]=useState([]);
 const [brands,setBrands]=useState([]);
 const [subcat,setSubCat]=useState([])
 const [childcat,setChildCat]=useState([])
 const [images,setImages]=useState([]);
 const [imageURLs,setImageURLs]=useState([]);

//  const [product,setProduct]=useState({
//   product_category_id:'',
//   product_price:'',
//   product_seller_id:'',
//   status:1,
//   az:{
//     product_name:''
//   },
//   en:{
//     product_name:''
//   },
//   ru:{
//     product_name:''
//   },
//   az_des:'',
//   en_desc:'',
//   ru_desc:''

//  })

 useEffect(()=>{
   let categories='';
   let brandss='';
   let cat_url=UrlGenerator('az','categories');
   let brand_url=UrlGenerator('az','brands');

   fetch(cat_url)
   .then(response=>{
    response.json()
    .then(r=>{
       categories=r.data
       console.log(categories)

       fetch(brand_url)
       .then(response=>{
        response.json()
        .then(r=>{
           brandss=r.data
           console.log(brandss)
           console.log(categories)
           setCategories(categories)
           setBrands(brandss)
        })
        .catch(e=>console.log(e))
       })
       .catch(err=>console.log(err))

    })
    .catch(e=>console.log(e))
   })
   .catch(err=>console.log(err))

 },[])

    function readFileAsync(x){
      var reader=new FileReader();
      return new Promise((resolve,reject)=>{
        reader.onerror=()=>{
          reader.abort()
          reject(new DOMException("Problem parsing input file."))
        }
         
        reader.onload=()=>{
          resolve(reader.result)
        }
        reader.readAsDataURL(x);
      })
    }

   useEffect(()=>{
    images.forEach(x=>{
          readFileAsync(x)
          .then(res=>{
            setImageURLs([...imageURLs,res]);
          })
          .catch(err=>console.log(err))
        })
   },[images])

  function imageLoad(e){
    let z=[...e.target.files];
    setImages([...images,...z])
    console.log(images)
  }
    
       const getName=(e)=>{
         let value=e.target.value
         let lang=e.target.closest('.pro-name').getAttribute('data-lang');
        //  setProduct({
        //    ...product,
        //    [`${lang}`]:{
        //      ...product[lang],
        //      product_name:value}
        //  })
        product[lang.toString()].product_name=value;
       }

       const getDescription_az=(e)=>{
          product.az.product_description=e
       }

       const getDescription_en=(e)=>{
        product['en'].product_description=e
       }
       const getDescription_ru=(e)=>{
        product['ru'].product_description=e
       }

       const getCataegory=(e)=>{
        let value=e.target.value;
           product.product_category_id=value;
           let subCategories=categories.find(x=>x.id==value).children;
           if(subCategories!=null){
            setSubCat([...subCategories])
           }else{
            setSubCat([])
           }
           
       }

       function getBrands(e) {
        product.product_brand_id=e.target.value
       }

       const getSubCataegory=(e)=>{
        let value=e.target.value;
        product.product_category_id=value
         let childCategories=subcat.find(x=>x.id==value).children;
         if(childCategories!=null){
          setChildCat([...childCategories])
         }
         else{
          setChildCat([])
         }
         
        
       }
       const getChildCataegory=(e)=>{
        let value=e.target.value;
        product.product_category_id=value
       }

       const getPrice=(e)=>{
        let value=e.target.value
        product.product_price=value
       }

       const send=()=>{

          let newFormData=new FormData();
          for (let i = 0; i < images.length; i++) {
            newFormData.append(`images[${i}]`, images[i])
        }
          // newFormData.append('images[]',images)
          newFormData.append('az[product_description]',product.az['product_description'])
          newFormData.append('az[product_name]',product.az['product_name'])
          newFormData.append('en[product_description]',product.en['product_description'])
          newFormData.append('en[product_name]',product.en['product_name'])
          newFormData.append('ru[product_description]',product.ru['product_description'])
          newFormData.append('ru[product_name]',product.ru['product_name'])
          newFormData.append('product_category_id',product.product_category_id)
          newFormData.append('product_brand_id',product.product_brand_id)
          newFormData.append('product_price',product.product_price)
          newFormData.append('status',product.status)
          console.log(newFormData)
          console.log(product)
          let url=UrlGenerator("az",'products');
          let token=AppContext.events.getToken();
          
          if(token!=null){
            fetch(url,{
              method:'Post',
              body:newFormData,
              headers:{
                'Authorization':`${token.token_type} ${token.access_token}`
              }
            })
            .then(async res=>{
              if(res.ok){
                let r=await res.json()
                console.log(r)
              }else{
                document.getElementById('login__modal').style.display='block';
              }
            })
            .catch(err=>console.log(err))
          }else{
            document.getElementById('login__modal').style.display='block';
          }
          console.log(newFormData)
       }
       
 return (
   <div className='container-fluid'>
  <Card>
    <GoBack text='Mehsullara geri don' link='/profile/products'/>
   <Card.Header name="Mehsul Elave Et"/>
    <div className='row'>
      <div className='col-lg-4'>
      <form>
      <Tab clas='pro-name' id='name'>
        <Tab.Page id='az-name' clas='pro-name' lang='az'>
        <InputGroup onChange={getName} type='text' placeholder='azer' />
        </Tab.Page>
        <Tab.Page id='en-name' style={{'display':'none'}} clas='pro-name' lang='en'>
        <InputGroup onChange={getName} type='text' placeholder='eng'  />
        </Tab.Page>
        <Tab.Page id='ru-name' style={{'display':'none'}} clas='pro-name' lang='ru'>
        <InputGroup onChange={getName} type='text' placeholder='rus'/>
        </Tab.Page>
      </Tab>
       <SelectBox handleChange={getBrands} name='brands' label='Brands' options={brands}/>
       <SelectBox handleChange={getCataegory} name='categoriya' label='Categoriya' options={categories}/>
     
       {
         subcat.length>1?<SelectBox handleChange={getSubCataegory} name='subcategory' label='Sub Categoriya' options={subcat}/>:null
       }
       {
        childcat.length>1?<SelectBox handleChange={getChildCataegory} name='subcategory' label='Sub Categoriya' options={childcat}/>:null
       }
       <br/>
       <br/>
       <InputGroup min='0' onChange={getPrice}  type='number' name='price'/>
       </form>
      </div>
      <div className='col-lg-6'>
      <Tab  clas='pro-desc' id='desc'>

      <Tab.Page id='az-desc' clas='pro-desc' lang='az'>
      <JoditEditor onChange={getDescription_az} />
      </Tab.Page>
      <Tab.Page id='en-desc' style={{'display':'none'}} clas='pro-desc' lang='az'>
      <JoditEditor onChange={getDescription_en} />
      </Tab.Page>
      <Tab.Page id='ru-desc' style={{'display':'none'}} clas='pro-desc' lang='az'>
      <JoditEditor onChange={getDescription_ru} />
      </Tab.Page>

    </Tab>
       
      </div>
      
    </div>
    <div className='row'>
    <div className='col-lg-6'>
    <Card>
    <Card.Header name="Mehsul Resimlerini Elave Edin"/>
    <div><small>Rəsimləri toplu halda seçərək əlavə edə biilərsiniz.</small> </div>
    <br/>
    <div className='d-f'>
    {
     imageURLs.map(x=>{
         return <Image s={x}/>
       })
     }
     <FileInput onchange={imageLoad}/>
    </div>
  </Card>
     <Button onClick={send}  name='Əlavə Et' type="input" className='bg-primary'/>
    </div>
    </div>
  </Card>
  </div>
 )
}

export default React.memo(CreateProduct)
