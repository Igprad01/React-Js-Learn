import React from "react";
import Foto from './img/foto1.jpg'

const Picture = (props) => {
    return(
      <img src={Foto} alt="ini adalah foto" width={props.ukuran}/>
    )
    ;
  }

export default Picture