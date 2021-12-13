import { Search } from '@material-ui/icons';
import axios from 'axios';
import React, { useState } from 'react'
import '../Css/Searchform.css'
import baseURL from '../utils/utils';
function SearchForm({setDatas}) {
const [keyword, setKeyword] = useState('')
    const handleSearch=(e)=>{
e.preventDefault();
if(keyword)
{
axios.post(`${baseURL}/search`,{keyword}).then((response)=>{
    console.log(response.data);
setDatas(response.data)

})
}
    }
    return (
        <div className="search_form_wrapper">
            <form className="search_form" onSubmit={handleSearch}>
<input type="text" placeholder="Type Dish name..." value={keyword} onChange={(e)=>setKeyword(e.target.value)}/>

<button className="search_button"><Search/></button>
            </form>
        </div>
    )
}

export default SearchForm
