import AboutPAge from "../AboutPage/AboutPAge"
import FrontPage from "../FrontPage/FrontPage"
import { GaleryPage } from "../GaleryPage/GaleryPage"
import Location from "../Location/Location"


const Index = () => {
    // aqui van todo los componentes del index portada,sobre nosotros,carrusel...
    return (

        <>
            <FrontPage />
            <AboutPAge />
            <GaleryPage />
            {/* aqui hiria eventos */}
            {/* aqui hiria  ¿Dónde estamos? */}
            <Location />
        </>


    )
}

export default Index