import React from "react";

const Toggle = ({ styling, toggleTheme, isDarkMode }) => {
  return (
    <button onClick={toggleTheme} className={styling}>
      {isDarkMode ? 'Light' : 'Dark'}
    </button>
  );
};

export default Toggle;
