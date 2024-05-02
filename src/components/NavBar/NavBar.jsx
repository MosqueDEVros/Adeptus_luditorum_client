import { useState } from "react"
import IconsNavBar from "./ComponentNavBar/IconsNavBar"
import LogoNavBar from "./ComponentNavBar/LogoNavBar"
import MenuLinks from "./ComponentNavBar/MenuLinks"

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const hiddenMobile = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav >
            <div className="reverse-mb">


                <LogoNavBar />

                <button onClick={() => hiddenMobile()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
                        <path d="M22.5 7H1.5C0.671578 7 0 7.67158 0 8.5C0 9.32842 0.671578 10 1.5 10H22.5C23.3284 10 24 9.32842 24 8.5C24 7.67158 23.3284 7 22.5 7Z" fill={showMenu ? "#00509D" : "#74C4F5"} />
                        <path d="M1.5 3.00001H22.5C23.3284 3.00001 24 2.32843 24 1.5C24 0.67158 23.3284 0 22.5 0H1.5C0.671578 0 0 0.67158 0 1.5C0 2.32843 0.671578 3.00001 1.5 3.00001Z" fill={showMenu ? "#00509D" : "#74C4F5"} />
                        <path d="M22.5 14H1.5C0.671578 14 0 14.6716 0 15.5C0 16.3284 0.671578 17 1.5 17H22.5C23.3284 17 24 16.3284 24 15.5C24 14.6716 23.3284 14 22.5 14Z" fill={showMenu ? "#00509D" : "#74C4F5"} />
                    </svg>
                </button>

                <div className={showMenu ? 'hidden' : 'block'}>
                    <MenuLinks />
                </div>


            </div>


            <IconsNavBar />

        </nav>
    )
}

export default NavBar