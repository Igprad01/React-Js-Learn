import React from "react";

const Search = ({padding}) => {
    return (
        <input type="search" name="#" id="#" placeholder="Search a for movie" className={`block w-full text-black border-4 ml-50 rounded-md pl-5 mt-5 ${padding} hover: outline-8`} />
    )
    
}

export default Search
