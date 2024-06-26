import { useState } from "react"
import IconsNavBar from "./ComponentNavBar/IconsNavBar"
import LogoNavBar from "./ComponentNavBar/LogoNavBar"
import MenuLinks from "./ComponentNavBar/MenuLinks"

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(true)
    const [showMenuO, setShowMenu0] = useState(true)




    const toggleMenu = () => {
        setShowMenu0(false)
        setShowMenu(!showMenu);

    }


    return (
        // genero una clase dinamica dentro de otra clase dinamica por que por defecto al cargar la web se activaba una clase y queria que se active solo 
        //cuando se haga click
        <nav className='nav-base '>
            <div className="reverse-mb">


                <LogoNavBar />

                {/* dropdown version mobile */}
                <button
                    className="hamburguer-btn"
                    onClick={() => toggleMenu()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
                        <path d="M22.5 7H1.5C0.671578 7 0 7.67158 0 8.5C0 9.32842 0.671578 10 1.5 10H22.5C23.3284 10 24 9.32842 24 8.5C24 7.67158 23.3284 7 22.5 7Z" fill={showMenu ? "#00509D" : "#74C4F5"} />
                        <path d="M1.5 3.00001H22.5C23.3284 3.00001 24 2.32843 24 1.5C24 0.67158 23.3284 0 22.5 0H1.5C0.671578 0 0 0.67158 0 1.5C0 2.32843 0.671578 3.00001 1.5 3.00001Z" fill={showMenu ? "#00509D" : "#74C4F5"} />
                        <path d="M22.5 14H1.5C0.671578 14 0 14.6716 0 15.5C0 16.3284 0.671578 17 1.5 17H22.5C23.3284 17 24 16.3284 24 15.5C24 14.6716 23.3284 14 22.5 14Z" fill={showMenu ? "#00509D" : "#74C4F5"} />
                    </svg>
                </button>



            </div>
            <div className={showMenu ? ' hidden-filter-black' : 'show-filter-black'}>
                <div className={` ${showMenuO ? 'hidden' : !showMenu ? ' block' : 'hidden-animation'}`}>
                    <div className="block-btn-close">
                        <button className="btn-close-navbar" onClick={() => toggleMenu()}>
                            <p>X</p>
                        </button>
                    </div>
                    <MenuLinks />
                </div>
            </div>
            <div className="block-version-pc">
                <MenuLinks />
            </div>

            <div className="icon-social-block">
                <IconsNavBar />
            </div>





        </nav>
    )
}

export default NavBar