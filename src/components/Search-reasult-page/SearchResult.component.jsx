import React,{useContext} from 'react'
import {searchContext} from "../../contexts/search"
import './SearchResult.component.scss'
import SelectBox from '../Select-box/SelectBox.component';
import SearchResultComp from '../search-result-component/SearchResultComp.component';


const langs =['azeri', 'russia']


    function SearchResult(props) {


        const products=useContext(searchContext);
        return (
            <section className="search_result__section">
                <SelectBox options={langs} class='search_re'/>
                <SearchResultComp catFilter={props.catFilter} data={products.state.filteredData}/>
            </section>
            
        )
    }


export default SearchResult
