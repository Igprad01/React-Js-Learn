import React from "react";

const Button = (click, content) => {
   return (
    <button onClick={click}>
        {content}
    </button>
   )
}

export default Button