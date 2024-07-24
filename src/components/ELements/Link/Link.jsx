import React from "react";


const Link = (props) => {
    return (
        <a href={props.link} className={``} >{props.title}</a>
    )
}

export default Link