import React from 'react';

function Search(props){
    return(
        <input 
        type='search' 
        id='searchbar' 
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)} />
    );
}

export default Search;
