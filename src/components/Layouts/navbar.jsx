import React, { useState } from "react";
import LogoNav from "../ELements/Link/Link";
import ListNav from "../ELements/ListNav/List";
import Search from "../ELements/Pencarian/Pencarian";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const ToggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    
    return (
        <nav className="w-full bg-black p-12">
            <div className="container mx-auto flex justify-between text-2xl capitalize text-white">
                <LogoNav title='Indo Movies' />
                <div className="hidden md:flex items-center space-x-10">
                    <Search />
                    <ListNav animation = 'hover:underline'/> 
                </div>
                <div className="md:hidden flex items-center ml-14 bg-white">
                    <button onClick={ToggleMenu} className="focus: outline-none">
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                    </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="mt-5 mr-3 font-bold text-white text-base capitalize">
                    <Search padding = 'py-2 pr-10'/>
                    <div className="mt-2">
                    <ListNav />
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar
