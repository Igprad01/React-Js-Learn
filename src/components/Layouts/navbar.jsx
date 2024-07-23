import React from "react";
import LogoNav from "../ELements/Logo/Logo";
import ListNav from "../ELements/ListNav/List";

const Navbar = () => {
    return (
        <nav className="w-full bg-blue-700 p-5">
            <div className="container mx-auto flex justify-between">
                <LogoNav />
                <ListNav />
            </div>
        </nav>
    )
}


export default Navbar