import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './index.scss';
import { debounce } from 'lodash';

function SearchBar(props) {
    const handleChange = debounce((text) => {
        props.search(text);
        // console.log('search content search')
    }, 500);

    return (
        <div className="searchbar-div">
            <SearchIcon />
            <input onChange={e => handleChange(e.target.value)} placeholder="Search" type="text" />
        </div>
    )
}

export default SearchBar
