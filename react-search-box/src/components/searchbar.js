import React from 'react';

const SearchBar=(props)=>{
    return(
       <div className="search-bar">
        <input type="text" placeholder="search names" onChange={props.change} />
        </div>
    )
  }

  export default SearchBar