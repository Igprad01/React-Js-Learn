import React from "react";

const TeksRouter = (props) => {
    return(
        <p className={`${props.teksColor} font-bold italic`}><a href={props.link}>ini adalah router</a></p>
    )
}

export default TeksRouter