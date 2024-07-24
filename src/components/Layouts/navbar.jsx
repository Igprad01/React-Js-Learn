import React from "react";
import LogoNav from "../ELements/Link/Link";
import ListNav from "../ELements/ListNav/List";
import Search from "../ELements/Pencarian/Pencarian";

const Navbar = () => {

    return (
        <nav className="w-full bg-blue-700 p-10">
            <div className="container mx-auto flex justify-between text-2xl capitalize text-white">
                <LogoNav title = 'Indo Movies'  />
                <div className="hidden ">
                <Search />  
                <ListNav />
                </div>
            </div>
        </nav>
    )
}
//  responsive navbar hamburger

export default Navbar