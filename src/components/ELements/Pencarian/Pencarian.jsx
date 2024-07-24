import React from "react";

const Search = (props) => {
    return (
        <input type="search" name="#" id="#" placeholder="Search a for movie" className={`block w-96 text-black border outline-0 ml-30 rounded-md pl-5 ${props.padding}`} />
    )
    
}

export default Search
