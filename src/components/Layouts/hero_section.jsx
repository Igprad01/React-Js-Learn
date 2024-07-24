import React from "react";
import Heading1 from "../ELements/Heading1/H1";
import Button from "../ELements/Button/Button";
import Gambar from "../ELements/Image/Image";


const HeroSection = () => {
    return (
        <div className="container ">
            <Heading1 titleH1 = 'ini adalah hero section'/>
            <Button content = 'ini adalah konten' />
            <Gambar imgLink = '' />
        </div>
    )
}

export default HeroSection