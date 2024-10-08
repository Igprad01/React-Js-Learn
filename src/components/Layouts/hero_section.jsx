import React from "react";
import Heading1 from "../ELements/Heading1/H1";
import Search from "../ELements/Pencarian/Pencarian"

const HeroSection = ({ isDarkMode }) => {
  return (
    <div
      className={`relative w-full py-24 px-32 md:py-58 lg:py-72 flex items-center justify-center ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="absolute flex items-center justify-center">
        <div className="text-center">
          <Heading1 text="enjoy exploring movies on our website"  styling={`font-bold text-xl capitalize md:text-5xl lg:text-5xl ${ isDarkMode ? "text-white" : "text-black"
            }`}
          />
          <Search padding={`py-2 pr-10 mt-10`} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
