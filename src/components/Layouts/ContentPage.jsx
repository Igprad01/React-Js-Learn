import React from "react";
import Heading1 from '../ELements/Heading1/H1';
import Card from "../ELements/Card/Card";

const ContentPage = () => {
    const Numbercard = 10;

    const ArrayCard = Array.from({length : Numbercard});
    return (
        <div className={`container bg-slate-200  mx-auto p-5 rounded-lg shadow-lg`}>
            <Heading1 text = 'ini adalah teks' />
            <div className={`w-full grid grid-cols-5 gap-5 mb-7`}>
                {ArrayCard.map((_, dat)=>(
                    <Card key = {dat} />
                ))}
            </div>
        </div>
    )
}

export default ContentPage