import { Link } from "react-router-dom"

const MenuLinks = () => {
    // DOM que te empuja a home esta conectado a un ref de home en algun lugar del index

    function scrollToHome() {
        const pageHome = document.getElementById('Home');
        if (pageHome) {
            pageHome.scrollIntoView({ behavior: 'smooth' });
        }
    }
    // DOM que te empuja a sobre nosotros esta conectado a un ref de sobre nosotros en algun lugar del index

    function scrollToAbout() {
        const pageAbout = document.getElementById('About');
        if (pageAbout) {
            pageAbout.scrollIntoView({ behavior: 'smooth' });
        }
    }
    // DOM que te empuja a galeria esta conectado a un ref de galeria en algun lugar del index

    function scrollToGalery() {
        const pageGalery = document.getElementById('Galery');
        if (pageGalery) {
            pageGalery.scrollIntoView({ behavior: 'smooth' });
        }
    }
    // DOM que te empuja a contacto esta conectado a un ref de contacto en algun lugar del index
    function scrollToContact() {
        const pageContact = document.getElementById('Contact');
        if (pageContact) {
            pageContact.scrollIntoView({ behavior: 'smooth' });
        }
    }



    return (

        <div className="component2">
            <Link href="#" onClick={scrollToHome} className="navbar-link">
                HOME
            </Link>
            <Link href="#" onClick={scrollToAbout} className="navbar-link">
                SOBRE NOSOTROS
            </Link>
            <Link href="#" onClick={scrollToGalery} className="navbar-link">
                GALERÍA
            </Link>
            <Link href="#" onClick={scrollToContact} className="navbar-link">
                CONTACTO
            </Link>
        </div>


    )
}

export default MenuLinks