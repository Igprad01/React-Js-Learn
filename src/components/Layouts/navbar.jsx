import React, { useState } from "react";
import ListNav from "../ELements/ListNav/List";

const  Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const ToggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    
    return (
        <nav className="w-full p-5 shadow-lg">
            <div className="container mx-auto flex justify-between text-xl capitalize text-black">
                <div className="hidden md:flex items-center space-x-10">
                    <ListNav animation = 'hover:underline'/> 
                </div>
                <div className="md:hidden flex items-center bg-white">
                    <button onClick={ToggleMenu} className="focus: outline-none">
                    <svg viewBox="0 0 100 80" width="20" height="20">
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                    </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="mt-5 font-bold text-black text-base capitalize">
                    <div className="mr-2 ml-1">
                    <ListNav />
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar
