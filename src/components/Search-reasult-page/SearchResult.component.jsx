import React,{useContext} from 'react'
import {searchContext} from "../../contexts/search"
import './SearchResult.component.scss'
import SelectBox from '../Select-box/SelectBox.component';
import SearchResultComp from '../search-result-component/SearchResultComp.component';


const langs =[
    {
        id:1,
        value:0,
        name:"Ada görə"
    },
    {
        id:2,
        value:1,
        name:"Yaranma tarixə görə"
    },
    {
        id:3,
        value:2,
        name:"Reytinqə görə"
    }
]
    



    function SearchResult(props) {


        const products=useContext(searchContext);
        return (
            <section className="search_result__section">
                <div className="search_result_content">
                    <SelectBox  options={langs} class='search_re'/>
                </div>
                    <SearchResultComp catFilter={props.catFilter} data={products.state.filteredData}/>
            </section>
            
        )
    }


export default SearchResult
