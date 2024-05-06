import React from "react"

const ButtonA = (props) => {
    const kalimat = {
      kalimat1 : "hahahahahahaha",
    }
    return (
      <button className={`px-10 py-10 ${props.color}`}>{kalimat.kalimat1}</button>
    )
  }

  export default ButtonA