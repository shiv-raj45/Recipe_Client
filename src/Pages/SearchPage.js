import React, { useState } from 'react'
import SearchForm from '../Components/SearchForm'
import SingleItem from '../Components/SingleItem'
import '../Css/searchpage.css'
function SearchPage() {

    const [datas, setDatas] = useState(null);

    return (
        <div className="searchpage">
            <SearchForm setDatas={setDatas} />
            <div className="search_result">
                {datas === null && (<div className="result_unavailable">
                    Search your favourite Recipe here</div>)}
                    {datas?.length === 0 &&
                     (<div className="result_unavailable"> Sorry we didn't find Recipe for your search </div>)}


                {datas?.map((data, index) => (<SingleItem key={index} product={data} />))}
            </div>


        </div>
    )
}

export default SearchPage
