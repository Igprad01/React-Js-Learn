import React from "react";

const Gambar = ({imgLink, titleImg, height, width}) => {
    return (
        <img src={imgLink} alt={titleImg} className={``} height={height} width={width} />
    )
}

export default Gambar