import { Link } from "react-router-dom"

const MenuLinks = () => {
    return (

        <div className="component2">
            < Link className="navbar-link">
                HOME
            </Link >
            <Link className="navbar-link">
                SOBRE NOSOTROS
            </Link>
            <Link className="navbar-link">
                GALERÍA
            </Link >
            <Link className="navbar-link">
                CONTACTO
            </Link>
        </div>


    )
}

export default MenuLinks