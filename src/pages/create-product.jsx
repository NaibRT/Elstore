import React,{useEffect,useState} from 'react'
import Card from '../components/card/card.component'
import GoBack from '../components/go-back/go-back.component'
import InputGroup from '../components/InputGroup/InputGroup.component'
import SelectBox from '../components/Select-box/SelectBox.component'
import JoditEditor from 'jodit-react'
import FileInput from '../components/file-input/file-input.component'
import UrlGenerator from '../services/url-generator'
import { appContext } from '../contexts/appContext'
import Image from '../components/file-input/image'

function CreateProduct() {
 const [categories,setCategories]=useState([]);
 const [images,setImages]=useState([]);
 const [imageURLs,setImageURLs]=useState([]);

 useEffect(()=>{
   let url=UrlGenerator('az','categories');
   fetch(url)
   .then(response=>{
    response.json()
    .then(r=>{
       setCategories(r.data)
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
  }
  console.log(imageURLs)
 return (
  <Card>
    <GoBack text='Mehsullara geri don' link='/profile/products'/>
   <Card.Header name="Mehsul Elave Et"/>
    <div className='row'>
      <div className='col-lg-4'>
      <InputGroup type='text' name='name' />
       <SelectBox name='categoriya' label='Categoriya' options={categories}/>
       <br/>
       <InputGroup type='number' name='price'/>
      </div>
      <div className='col-lg-6'>
       <JoditEditor/>
      </div>
    </div>
    <div className='row'>
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
    </div>
  </Card>
 )
}

export default CreateProduct
