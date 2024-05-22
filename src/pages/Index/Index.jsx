import FrontPage from "../FrontPage/FrontPage"
import { GaleryPage } from "../GaleryPage/GaleryPage"
import Location from "../Location/Location"
import Events from "../Events/Events"


const Index = () => {
    // aqui van todo los componentes del index portada,sobre nosotros,carrusel...
    return (

        <>
            <FrontPage />
            {/* aqui hiria sobre nosotros */}
            <GaleryPage />
            <Events />
            <Location />
        </>


    )
}

export default Index