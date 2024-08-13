import React, { useState, useEffect } from "react";
import Heading1 from '../ELements/Heading1/H1';
import Card from "../ELements/Card/Card";
import GetMovie from "../../api/MovieAPi";

const ContentPage = () => {
    const [movies, setmoviepage] = useState([]);
    const Numbercard = 30; 

    useEffect(() => {
        const Moviedata = async () => {
            const data = await GetMovie();
            setmoviepage(data);
        };

        Moviedata();
    },[])
 
    return (
        <div className={`container bg-slate-200 mx-auto p-5 rounded-lg shadow-lg `}>
            <Heading1 text='movies list' styling = 'text-center font-bold text-4xl uppercase' />
            <div className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-7 mt-10`}>
                {movies.slice(0, Numbercard).map((movie, index) => (
                    <Card key={index} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default ContentPage;

