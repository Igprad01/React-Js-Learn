import React, { useState } from "react";
import LogoNav from "../ELements/Link/Link";
import ListNav from "../ELements/ListNav/List";
import Search from "../ELements/Pencarian/Pencarian";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const ToggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full bg-blue-700 p-10">
            <div className="container mx-auto flex justify-between text-2xl capitalize text-white">
                <LogoNav title = 'Indo Movies'  />
                <div className="hidden md:flex items-center space-x-14">
                <Search />  
                <ListNav />
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={ToggleMenu} className="focus: outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div>
                <Search />  
                <ListNav />
                </div>
            )}
        </nav>
    )
}

export default Navbar