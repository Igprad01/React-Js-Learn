import { useState } from "react"
import ListNav from "../ELements/ListNav/List";
import Toggle from "../ELements/toggle/Toggle";

const Navbar = ({ isDarkMode, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`w-full p-5 shadow-lg ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
            <div className="container mx-auto text-xl capitalize">
                <div className="hidden justify-between md:flex items-center space-x-10">
                    <ListNav animation="hover:underline" />
                    <Toggle styling="cursor-pointer" toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                </div>
                <div className="justify-between mr-5 md:hidden flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg viewBox="0 0 100 80" width="20" height="20">
                            <rect width="100" height="20" fill={isDarkMode ? "white" : "black"}></rect>
                            <rect y="30" width="100" height="20" fill={isDarkMode ? "white" : "black"}></rect>
                            <rect y="60" width="100" height="20" fill={isDarkMode ? "white" : "black"}></rect>
                        </svg>
                    </button>
                    <Toggle styling="cursor-pointer" toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                </div>
            </div>
            {isOpen && (
                <div className={`mt-5 font-bold text-base capitalize ${isDarkMode ? "text-white" : "text-black"}`}>
                    <div className="ml-1">
                        <ListNav />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
