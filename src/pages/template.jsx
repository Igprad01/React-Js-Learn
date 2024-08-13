import ContentPage from "../components/Layouts/ContentPage"
import Footer from "../components/Layouts/footer"
import HeroSection from "../components/Layouts/hero_section"
import Navbar from "../components/Layouts/navbar"

const Template = () => {
    return (
        <body>
            <Navbar />
            <HeroSection />
            <ContentPage />
            <Footer />
        </body>
    )
}


export default Template