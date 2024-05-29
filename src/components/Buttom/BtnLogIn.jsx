import { Link } from "react-router-dom"


const BtnLogIn = () => {
    return (
        <div className="block-logIn-SignUp">

            <Link to={`/auth/LogIn`} className="no-decoration">
                <div className="left-block">Ingresar</div>
            </Link>

            <Link to={`/auth/SignUp`} className="no-decoration">
                <div className="right-block">Registro</div>
            </Link>


        </div>
    );
};

export default BtnLogIn;

