import React from "react";

const Gambar = (props) => {
    return (
        <img src={props.imgLink} alt={props.titleImg} className={``} height={props.height} width={props.width} />
    )
}

export default Gambar