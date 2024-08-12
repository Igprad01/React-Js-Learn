import React from 'react';
import Heading1 from './../Heading1/H1';

const Card = (props) => {
    return (
        <div className={`box-border py-5 px-5 bg-zinc-50`}>
            <Heading1 text={props.movie.title} />
            <Heading1 text = {props.movie.year} />
        </div>
    );
};

export default Card;
