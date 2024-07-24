import React from "react";

const Button = (props) => {
   return (
    <button onClick={props.click} className={``} >
        {props.content}
    </button>
   )
}

export default Button