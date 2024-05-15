import React from "react"

const ButtonA = (props) => {
    return (
      <button className={`px-8 py-3 rounded-lg ${props.color} ${props.textColor} `}>Submit</button>
    )
  }

  export default ButtonA