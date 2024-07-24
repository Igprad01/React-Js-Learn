import React from "react";
import Heading1 from "../ELements/Heading1/H1";
import GambarSection from "../ELements/Image/Image";
import Button from "../ELements/Button/Button";


const HeroSection = () => {
    return (
        <div className="container ">
            <Heading1 titleH1 = 'ini adalah hero section'/>
            <GambarSection Link = '' />
            <Button content = 'ini adalah konten' />
        </div>
    )
}

export default HeroSection