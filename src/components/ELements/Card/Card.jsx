import React from "react";
import Heading1 from './../Heading1/H1';

// get api nya nanti disini


const Card = (props) => {
    return (
        <div className={`box-border py-5 px-5 bg-zinc-50`}>
            <Heading1 text = 'ini adalah card' />
        </div>
    )
}

export default Card