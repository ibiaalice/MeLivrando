import React from 'react';

function Search(props){
    return(
        <input 
        type='search' 
        id='search' 
        value={props.search}
        onChange={(book) => props.setSearch(book.target.value) } />
    );
}

export default Search;