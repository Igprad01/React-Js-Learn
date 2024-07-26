import React from "react";
import Heading1 from "../ELements/Heading1/H1";
import Heading2 from "../ELements/Heading2/H2";


const HeroSection = () => {

    return (
        <div className=" relative w-full bg-blue-500 bg-hero-section bg-cover py-32 px-32 md:py-58 lg:py-72 xl:py-96">
            <div className="absolute inset-0 bg-black opacity-40">
                <div className="text-5xl text-center ">
                    <Heading1 />
                    <Heading2 />
                </div>
            </div> 
        </div>
    )
}


export default HeroSection