import React from 'react';

const SearchBar = ({ searchKey, onKeyChange })=>{
    console.log("4aa");
    return(
        <form className="personal-notes__searchBar">
            <input type="text" name="searchBar" onChange={onKeyChange} value={searchKey} placeholder="Search..."/>
        </form>
    );    
}

export default SearchBar;

