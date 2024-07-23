import React from "react";
import LogoNav from "../ELements/Logo/Logo";
import ListNav from "../ELements/ListNav/List";

const Navbar = () => {
    return (
        <nav className="w-full bg-blue-700 p-10">
            <div className="container mx-auto flex justify-between text-2xl capitalize text-white">
                <LogoNav title = 'Indo Movies'  />
                <ListNav />
            </div>
        </nav>
    )
}


export default Navbar