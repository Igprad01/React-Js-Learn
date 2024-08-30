import ContentPage from "../components/Layouts/ContentPage"
import Footer from "../components/Layouts/footer"
import HeroSection from "../components/Layouts/hero_section"
import Navbar from "../components/Layouts/navbar"
import { useState } from "react"

const Template = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggletheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <body>
           <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
           <Navbar toggleTheme={toggletheme} isDarkMode={isDarkMode} />
            <HeroSection isDarkMode={isDarkMode}  />
            <ContentPage isDarkMode={isDarkMode} />
            <Footer isDarkMode={isDarkMode} />
           </div>
        </body>
    )
}


export default Template