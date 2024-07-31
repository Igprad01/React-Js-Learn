import React from "react";
import Heading1 from "../ELements/Heading1/H1";
import Heading2 from "../ELements/Heading2/H2";
import Search from "../ELements/Pencarian/Pencarian";

const HeroSection = () => {
    return (
        <div className="relative w-full bg-white bg-cover py-24 px-32 md:py-58 lg:py-72 xl:py-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-40 flex items-center justify-center">
                <div className="text-center font-bold">
                    <Heading1 text="MOVIES WEB" styling="text-white text-5xl" />
                    <Heading2 text = "lorem ipsum" styling = 'text-white text-xl' />
                    <Search padding = 'py-2 pr-10'/>
                </div>
            </div> 
        </div>
    );
}

export default HeroSection;
