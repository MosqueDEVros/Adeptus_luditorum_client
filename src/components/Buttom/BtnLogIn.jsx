import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom"


const BtnLogIn = () => {

    const location = useLocation();
    console.log(location.pathname)
    const isRouteLoginOrSignUp = useMemo(() => location.pathname === '/auth/LogIn', [location])

    return (
        <div className="block-logIn-SignUp">

            <Link to={`/auth/LogIn`} className={`${isRouteLoginOrSignUp ? 'activeShadowlogIn' : 'no-decoration'}`}>
                <div className={`left-block ${isRouteLoginOrSignUp ? 'ActiveLogin' : 'default'}`} >Ingresar</div>
            </Link>

            <Link to={`/auth/SignUp`} className={`${isRouteLoginOrSignUp ? 'no-decoration' : 'activeShadowSignUp'}`}>
                <div className={`right-block ${isRouteLoginOrSignUp ? ' default' : 'ActiveRegister '}`}>Registro</div>
            </Link>


        </div>
    );
};

export default BtnLogIn;

