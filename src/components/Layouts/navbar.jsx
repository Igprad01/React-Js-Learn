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
        <nav className="w-full bg-blue-700 p-10">
            <div className="container mx-auto flex justify-between text-2xl capitalize text-white">
                <LogoNav title='Indo Movies' />
                <div className="hidden md:flex items-center space-x-10">
                    <Search />
                    <ListNav />
                </div>
                <div className="md:hidden flex items-center">
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
                <div className="mt-10">
                    <Search />
                    <ListNav />
                </div>
            )}
        </nav>
    );
}

export default Navbar
