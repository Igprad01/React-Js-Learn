import React from "react";


const Link = (props) => {
    return (
        <a href={props.link} >{props.title}</a>
    )
}

export default Link