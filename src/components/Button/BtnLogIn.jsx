import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom"


const BtnLogIn = () => {

    const location = useLocation();
    console.log(location.pathname)
    const isRouteLoginOrSignUp = useMemo(() => location.pathname === '/auth/login', [location])

    return (
        <div className="block-logIn-SignUp">

            <Link to={`/auth/login`} className={`${isRouteLoginOrSignUp ? 'activeShadowlogIn' : 'no-decoration'}`}>
                <div className={`left-block ${isRouteLoginOrSignUp ? 'ActiveLogin' : 'default'}`} >Ingresar</div>
            </Link>

            <Link to={`/auth/signup`} className={`${isRouteLoginOrSignUp ? 'no-decoration' : 'activeShadowSignUp'}`}>
                <div className={`right-block ${isRouteLoginOrSignUp ? ' default' : 'ActiveRegister '}`}>Registro</div>
            </Link>


        </div>
    );
};

export default BtnLogIn;

