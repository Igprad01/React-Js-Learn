import React, { useState, useEffect } from "react";
import Heading1 from '../ELements/Heading1/H1';
import Card from "../ELements/Card/Card";
import GetMovie from "../../api/MovieAPi";

const ContentPage = () => {
    const [movies, setmoviepage] = useState([]);
    const Numbercard = 10; 

    useEffect(() => {
        const Moviedata = async () => {
            const data = await GetMovie();
            setmoviepage(data);
        };

        Moviedata();
    },[])
 
    return (
        <div className={`container bg-slate-200 mx-auto p-5 rounded-lg shadow-lg`}>
            <Heading1 text='ini adalah teks' />
            <div className={`w-full grid grid-cols-5 gap-5 mb-7`}>
                {movies.slice(0, Numbercard).map((movie, index) => (
                    <Card key={index} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default ContentPage;
