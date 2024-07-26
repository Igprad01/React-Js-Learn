import HeroSection from "../components/Layouts/hero_section"
import Navbar from "../components/Layouts/navbar"

const Template = () => {
    return (
        <body className="bg-hero-section bg-cover">
            <Navbar />
            <HeroSection />
        </body>
    )
}


export default Template