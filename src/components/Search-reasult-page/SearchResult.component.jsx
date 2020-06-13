import React from 'react'
import './SearchResult.component.scss'
import SelectBox from '../Select-box/SelectBox.component';
import SearchResultComp from '../search-result-component/SearchResultComp.component';


    function SearchResult() {
        return (
            <section className="search_result__section">
                <SelectBox/>
                <SearchResultComp/>
            </section>
            
        )
    }


export default SearchResult
