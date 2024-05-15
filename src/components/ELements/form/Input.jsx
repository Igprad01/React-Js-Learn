import React from "react";

const Input = (props) => {
    const {placeholder} = props
    return (
         <input 
         className="shadow appearance-none border-gray-300 rounded w-3/6 py-2 px-3 text-gray-700 focus:outline-none" 
         type="text" placeholder={placeholder} 
         />
    )
}

export default Input