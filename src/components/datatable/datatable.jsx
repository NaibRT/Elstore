import React,{useEffect,useState} from 'react';
import './datatable.jquery.scss';
import './datatable.scss';
import InputGroup from '../InputGroup/InputGroup.component'
import SelectBox from '../Select-box/SelectBox.component'
import UrlGenerator from '../../services/url-generator';
import axios from 'axios'
var $  = require( 'jquery' );
var dt = require( 'datatables.net' );



const kategories = [
    {
        name:'Search'
    },
    {
        name:'Search'
    },
    {
        name:'Search'
    },
    {
        name:'Search'
    }
]


function Datatable(params) {


    const [category,setCategory] = useState({
        category:[]
      })
      
      let categoryUrl = UrlGenerator('az','categories');
      
      
      useEffect(()=>{
              axios.get(categoryUrl,{headers:{
              }})
              .then(cat=>{
                  // setProduct(res.data.data)
                  setCategory({category:cat.data.data});
              })
      },[])
      
      
    


  
   const  names = [];

    useEffect(()=>{

        $(document).ready(function() {
            $('#example').dataTable();
        } );

        
        params.tbody.map((name)=>{
            names.push(name)
        });

        
        
    })

   
    const [searchMarket, setSearch]=useState({
        searchField:""
    })
     
   

    const filteredProduct = params.tbody.filter(item=> item.product_name.toLowerCase().includes(searchMarket.searchField.toLowerCase()));

    function searchName(e){
        setSearch({
            ...searchMarket,
            searchField:e.target.value
        })

    }
    
    const [state,setState] = useState({
        filteredData:[]
    })

    function handleSelect(e) {
        axios.get(`http://139.180.144.49/api/v1/az/search/product?filter[category_id]=${e.target.value}`)
        .then(res => {
            setState({filteredData: res.data.data});
            
            if(state.filteredData.length===0){
                alert('Bu kateqoriyada mehsul yoxdur')
            }
        })
    }

    

   

    return(
        <div className='dtable'>
            <div className='datatable_search'>
                <InputGroup onChange={searchName}  placeholder='Məhsul axtar' formIcon={require('../../assets/images/icons/search.svg')} />
                <SelectBox class='datatable_selectbox' handleChange={handleSelect} value={category.category.id} firstopt="Kateqoriya" options={category.category}/>
                <label >
                <span> Sıra aralığı:</span>
                   <div className="moneydiv">
                   <InputGroup classinout='money_search' />
                   <span>-</span>
                   <InputGroup classinout='money_search'/>
                   </div>
                </label>
            </div>
            <table id="example" class="display" >
        <thead>
            <tr>
                {
                    params!=null?
                    params.thead.map(head=>{
                        return <th>{head}</th>
                    }):''
                }
            </tr>
        </thead>
        <tbody>
                
            {
                (state.filteredData.length===0)? (params!==undefined)?

                filteredProduct.map(bodyItems=>{
                    return (
                        <tr>
                            <td>{bodyItems.product_name}</td>
                            <td>{bodyItems.Kateqorİya}</td>
                            <td>{bodyItems.say}</td>
                            <td><InputGroup value={bodyItems.price} formIcon={require('../../assets/images/azn.svg')} /></td>
                            <td><SelectBox firstopt='Status' name={bodyItems.status} /></td>
                            <td><a href="#">Duzelish</a> <a href="#">Sil</a></td>
                        </tr>
                    )
                })
                :null 
                : state.filteredData.map((bodyItems,i)=>{
                    return (
                        <tr>
                            <td>{bodyItems.product_name}</td>
                            <td>{bodyItems.Kateqorİya}</td>
                            <td>{bodyItems.say}</td>
                            <td><InputGroup value={bodyItems.price} /></td>
                            <td><SelectBox firstopt='Status' name={bodyItems.status} /></td>
                            <td><a href="#">Duzelish</a> <a href="#">Sil</a></td>
                        </tr>
                    )
                })
            }

            {
               
            }
           
        </tbody>
    </table>
        </div>
    )
}

export default Datatable

