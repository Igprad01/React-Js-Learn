import React from 'react';
import Heading1 from './../Heading1/H1';
import Gambar from '../Image/Image';

const Card = ({movie}) => {

    const {poster, title, year} = movie

    return (
        <div className={`box-border py-10 px-10  bg-zinc-50 rounded-xl `}>
           <div className='flex justify-center items-center'> 
           <Gambar imgLink = {poster} height = '500px'/>
           </div>
            <Heading1 text={title} styling = 'font-bold text-center mt-5 text-2xl ' />
            <Heading1 text = {year} styling = 'text-center mt-5 text-xl' />
        </div>
    );
};

export default Card;
