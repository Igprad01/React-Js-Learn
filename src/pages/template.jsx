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
            <Navbar toggleTheme={toggletheme} isDarkMode={isDarkMode} />
            <HeroSection isDarkMode={isDarkMode}  />
            <ContentPage isDarkMode={isDarkMode} />
            <Footer isDarkMode={isDarkMode} />
        </body>
    )
}


export default Template